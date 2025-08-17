import { useGSAP } from '@gsap/react';
import SkillCard from '../components/skills/SkillCard';
import { SKILLS } from '../constants/skills.constants';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { useRef } from 'react';

gsap.registerPlugin(Draggable, InertiaPlugin);

const Skills = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const proxyRef = useRef<HTMLDivElement>(null);
  const isAuto = useRef(true);
  const rotationSnap = useRef({ y: 0 });
  const lastUpdateRotation = useRef(0);
  const updatePending = useRef(false);

  useGSAP(() => {
    const container = containerRef.current!;
    const cards = Array.from(container.children) as HTMLElement[];
    const numSkills = SKILLS.length;
    const angleStep = 360 / numSkills;
    const speed = 360 / 60 / 60;
    const factor = 0.05;
    const ROTATION_THRESHOLD = 2;

    const cosCache = new Map<number, number>();
    const getCachedCos = (angle: number) => {
      const roundedAngle = Math.round(angle);
      if (!cosCache.has(roundedAngle)) {
        cosCache.set(roundedAngle, Math.cos((roundedAngle * Math.PI) / 180));
      }
      return cosCache.get(roundedAngle)!;
    };

    const updateBackFacing = () => {
      const containerRotation = rotationSnap.current.y;

      if (Math.abs(containerRotation - lastUpdateRotation.current) < ROTATION_THRESHOLD) {
        return;
      }

      lastUpdateRotation.current = containerRotation;

      if (updatePending.current) return;
      updatePending.current = true;

      requestAnimationFrame(() => {
        cards.forEach((card, index) => {
          let normalized = (containerRotation + index * angleStep) % 360;
          if (normalized > 180) normalized -= 360;
          if (normalized < -180) normalized += 360;
          const facing = Math.max(0, getCachedCos(normalized));
          card.style.setProperty('--facing', (0.4 + facing).toString());
        });
        updatePending.current = false;
      });
    };

    const tick = () => {
      if (isAuto.current) {
        rotationSnap.current.y += speed * gsap.ticker.deltaRatio();
        gsap.set(container, { rotationY: rotationSnap.current.y });
        gsap.set(proxyRef.current, { x: rotationSnap.current.y / factor });
        updateBackFacing();
      }
    };

    gsap.ticker.add(tick);

    const draggable = Draggable.create(proxyRef.current, {
      trigger: wrapperRef.current,
      type: 'x',
      inertia: true,
      onPress: function () {
        isAuto.current = false;
      },
      onRelease: function () {
        if (!this.tween) {
          isAuto.current = true;
        }
      },
      onDrag: function () {
        rotationSnap.current.y = this.x * factor;
        gsap.set(container, { rotationY: rotationSnap.current.y });
        updateBackFacing();
      },
      onThrowUpdate: function () {
        rotationSnap.current.y = this.x * factor;
        gsap.set(container, { rotationY: rotationSnap.current.y });
        updateBackFacing();
      },
      onThrowComplete: function () {
        isAuto.current = true;
        updateBackFacing();
      },
    });

    updateBackFacing();

    return () => {
      gsap.ticker.remove(tick);
      draggable[0].kill();
    };
  });

  return (
    <section id="skills" className="flex h-dvh w-full items-center justify-center">
      <div ref={wrapperRef} className="skills-container-wrapper">
        <div ref={proxyRef} className="draggable-proxy absolute hidden size-full will-change-transform" />
        <div ref={containerRef} className="skills-container">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} style={{ '--i': index } as React.CSSProperties} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

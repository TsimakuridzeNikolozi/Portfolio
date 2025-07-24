import * as THREE from 'three';

const HeroLights = () => (
  <>
    {/* Main desk lamp - warm gold */}
    <spotLight
      position={[3.131, 5.5, 4.844]}
      target-position={[0, 4, 3.5]}
      angle={0.8}
      penumbra={0.3}
      intensity={100}
      color="#ffeaa7"
      castShadow
    />

    {/* Laptop screen glow - cool contrast to gold */}
    <pointLight position={[0.13, 4.5, 3.552]} intensity={30} color="#74b9ff" distance={2} decay={2} />

    {/* Soft golden ambient lighting */}
    <ambientLight intensity={0.5} color="#fff3b1" />

    {/* Golden-tinted overhead lighting */}
    <directionalLight
      position={[-8, 6, 2]}
      intensity={0.6}
      color="#ccb94f"
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />

    <directionalLight
      position={[-8, 6, 2]}
      intensity={2}
      color="white"
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />

    {/* Golden fill light for warm atmosphere */}
    <spotLight
      position={[-2, 6, 6]}
      target-position={[0, 4, 3]}
      angle={0.6}
      penumbra={0.8}
      intensity={50}
      color="#ffeaa7"
    />

    {/* Warm golden rim light */}
    <spotLight
      position={[4, 5, 1]}
      target-position={[0, 4, 3]}
      angle={0.5}
      penumbra={0.7}
      intensity={35}
      color="#fff3b1"
    />

    {/* Phone screen - subtle golden glow */}
    <pointLight position={[3.618, 4.4, 2.543]} intensity={12} color="#fff3b1" distance={0.8} decay={3} />

    {/* Mug reflection - warm golden tone */}
    <pointLight position={[-2.1, 4.4, 3.62]} intensity={8} color="#ffeaa7" distance={1} decay={2} />

    {/* Under-desk golden bounce light */}
    <pointLight position={[0, 3, 4]} intensity={20} color="#ccb94f" distance={3} decay={1} />

    {/* Additional golden atmosphere lights */}
    <pointLight position={[-4, 4, 2]} intensity={15} color="#fff3b1" distance={4} decay={1.5} />

    <pointLight position={[5, 3, 5]} intensity={18} color="#ffeaa7" distance={5} decay={1.2} />

    {/* Soft golden area light for warm ambiance */}
    <primitive
      object={new THREE.RectAreaLight('#ccb94f', 12, 4, 3)}
      position={[2, 6, 1]}
      rotation={[-Math.PI / 3, Math.PI / 6, 0]}
    />
  </>
);

export default HeroLights;

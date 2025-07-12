import { tech } from '../constants';
import ArrowButton from './ArrowButton';

const HeroHeader = () => {
  return (
    <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
      <div className="flex flex-col gap-7">
        <div className="hero-text">
          <h1>Hi, I'm Nikolozi,</h1>
          <h1>Full-Stack Web3 Developer</h1>
          <h1>
            Experienced in
            <span className="slide">
              <span className="wrapper">
                {tech.map((technology, index) => (
                  <span key={index} className="flex items-center gap-1 pb-2 md:gap-2">
                    <img src={technology.imgPath} alt="person" className="size-7 rounded-full md:size-10 xl:size-15" />
                    <span>{technology.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
        </div>

        <ArrowButton text="See My Work" className="h-12 w-60 md:h-16 md:w-80" id="work-experience" />
      </div>
    </header>
  );
};

export default HeroHeader;

import { SOCIALS } from '../constants';

const Socials = () => {
  return (
    <div className="flex w-full justify-center gap-x-4">
      {SOCIALS.map((social) => (
        <a
          href={social.link}
          key={social.name}
          rel="noopener noreferrer"
          target="_blank"
          className="h-fit rounded-lg border border-accent/40 p-1 transition-all duration-300 hover:border-accent hover:bg-accent/30 hover:backdrop-blur-lg"
        >
          <img src={social.icon} alt={social.name} className="size-5 lg:size-7" />
        </a>
      ))}
    </div>
  );
};

export default Socials;

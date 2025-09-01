const Logo = () => {
  return (
    <a href="#hero" className="logo group relative inline-block">
      <div className="absolute inset-0 rounded-md border border-accent bg-black"></div>
      <div className="relative z-10 rounded-md border border-accent bg-black p-1.5 font-serif text-xl font-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:p-2 md:text-2xl xl:text-3xl 3xl:p-3 3xl:text-[2.5rem]">
        NT
      </div>
    </a>
  );
};

export default Logo;

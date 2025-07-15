const Logo = () => {
  return (
    <a href="#hero" className="logo group relative inline-block">
      <div className="absolute inset-0 rounded-md border border-accent bg-black"></div>
      <div className="relative z-10 rounded-md border border-accent bg-black p-2 font-serif text-3xl font-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        NT
      </div>
    </a>
  );
};

export default Logo;

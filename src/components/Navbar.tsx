import { NAVIGATION_LINKS } from '../constants';
import NavigationLink from './NavigationLink';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-x-20 xl:gap-x-40">
        <a
          href="#hero"
          className="logo rounded-md border border-gold-100 bg-black-100 p-2 font-serif text-3xl font-light drop-shadow-lg drop-shadow-gold-100/50 transition-all duration-300 hover:drop-shadow-gold-100"
        >
          NT
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-4 xl:gap-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <NavigationLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <a href="#contact">Contact Me</a>
    </header>
  );
};

export default Navbar;

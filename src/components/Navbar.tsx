import { NAVIGATION_LINKS } from '../constants';
import Logo from './Logo';
import NavigationLink from './NavigationLink';

const Navbar = () => {
  return (
    <header className="padding-x absolute top-0 left-0 z-20 flex w-full items-center justify-between pt-12 pb-6">
      <div className="flex items-center gap-x-20 xl:gap-x-40">
        <Logo />

        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <NavigationLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <a href="#contact" className="simple-button">
        Contact Me
      </a>
    </header>
  );
};

export default Navbar;

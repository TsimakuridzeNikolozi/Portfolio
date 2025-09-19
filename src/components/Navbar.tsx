import { smoothScrollTo } from '../utils/smoothScroll';
import { NAVIGATION_LINKS } from '../constants';
import Logo from './Logo';
import NavigationLink from './NavigationLink';

const Navbar = () => {
  const onContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) smoothScrollTo(contactSection);
  };

  return (
    <header className="padding-x z-10 flex w-full items-center justify-between pt-6 pb-4 md:pt-12 md:pb-6">
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

      <button className="simple-button" onClick={onContactClick}>
        Contact Me
      </button>
    </header>
  );
};

export default Navbar;

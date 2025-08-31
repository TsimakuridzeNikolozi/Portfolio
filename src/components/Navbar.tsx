import { NAVIGATION_LINKS } from '../constants';
import Logo from './Logo';
import NavigationLink from './NavigationLink';

const Navbar = () => {
  const onContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    const offset = 100;
    if (contactSection) {
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="padding-x absolute top-0 left-0 z-20 flex w-full items-center justify-between pt-6 pb-4 md:pt-12 md:pb-6">
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

      <a href="#contact" className="simple-button" onClick={onContactClick}>
        Contact Me
      </a>
    </header>
  );
};

export default Navbar;

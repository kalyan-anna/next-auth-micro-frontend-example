import { HTMLAttributes, MouseEventHandler } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { clsx } from 'clsx';

const links = [
  {
    href: '/account/dashboard',
    label: 'Dashboard',
  },
  {
    href: '/establishment',
    label: 'Establishment',
  },
];

interface NavBarProps extends HTMLAttributes<HTMLElement> {
  activePath?: string;
  showNav?: boolean;
  onSigninClick?: MouseEventHandler<HTMLButtonElement>;
  onSignoutClick?: MouseEventHandler<HTMLButtonElement>;
  authenticated?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({
  activePath = '/',
  showNav = false,
  onSigninClick,
  onSignoutClick,
  authenticated = false,
  ...props
}) => {
  return (
    <nav className="bg-white border-gray-200" {...props}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="http://localhost:8080"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">
            StrataPro
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white justify-center items-center">
            {showNav &&
              links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={clsx(
                      'block py-2 px-3 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0',
                      'hover:text-gray-900',
                      {
                        'underline decoration-pink-500 underline-offset-8':
                          link.href === activePath,
                      }
                    )}
                    aria-current={link.href === activePath}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            <li>
              {authenticated ? (
                <Button onClick={onSignoutClick}>Sign out</Button>
              ) : (
                <Button onClick={onSigninClick}>Sign in</Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

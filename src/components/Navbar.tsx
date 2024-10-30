import { useState } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Logo from './Logo';
import SearchPage from './SearchPage';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Define links with dropdown menu items
const links: { label: string; items?: string[] }[] = [
  {
    label: 'About',
    items: ['Artistic Directors', 'Advisory Board', 'Team', 'Collaborators'],
  },
  {
    label: 'Events',
    items: [
      'Corporate Shows',
      'Upcoming Performances',
      'Productions',
      'Special Events',
      'Tours',
      'Wall Of Fame',
    ],
  },
  {
    label: 'Gurukul',
    items: [
      'Programmes Offered',
      "Acharya's",
      'Workshops',
      'Students Feedback',
      'Activities',
    ],
  },
  {
    label: 'Achievements',
    items: ['Awards', 'Media', 'Feedbacks'],
  },
  {
    label: 'Gallery',
    items: ['Behind The Scene', 'Shoots', 'Goodies'],
  },
  {
    label: 'Support',
    items: ['Support Now', 'Book a Performance', "Buy Abhinava's Exclusive"],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track opened dropdown
  const { pathname } = useLocation();

  const handleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null); // Toggle off if already open
    } else {
      setOpenDropdown(label); // Open the dropdown
    }
  };

  return (
    <nav className="font-libre sticky top-0 z-50 flex w-full items-center border-2 border-b bg-white px-4 py-4 text-primary dark:bg-black md:px-[120px] md:py-6">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <Logo />
            <p className="bg-gradient-to-r from-secondary to-[#1B1B1E] bg-clip-text text-lg font-medium text-transparent dark:to-white">
              Abhinava Dance Company
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center text-base md:flex">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                to="/"
                className={cn(
                  pathname === '/'
                    ? 'text-secondary'
                    : 'text-primary dark:text-white',
                )}
              >
                Home
              </Link>
            </li>
            {links.map(({ label, items }, index) => (
              <li key={index}>
                <HoverCard openDelay={100} closeDelay={100}>
                  <HoverCardTrigger
                    className={cn(
                      'cursor-pointer hover:text-[#79348D]',
                      pathname?.includes(`/${label.toLowerCase()}`)
                        ? 'text-secondary'
                        : 'text-primary dark:text-white',
                    )}
                  >
                    {label}
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div>
                      {items?.map((item, idx) => (
                        <Link
                          key={idx}
                          className="cursor-pointer"
                          to={`/${label.toLowerCase()}/${item
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                        >
                          <p
                            className={cn(
                              'relative flex cursor-pointer select-none items-center px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[#79348D] hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                            )}
                          >
                            {item}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className={cn(
                  pathname === '/contact'
                    ? 'text-secondary'
                    : 'text-primary dark:text-white',
                )}
              >
                Contact
              </Link>
            </li>

            {/* Additional Components */}
            <SearchPage />
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full bg-white p-4 shadow-lg dark:bg-black md:hidden">
          <ul className="flex flex-col gap-4 text-[#313131] dark:text-gray-100">
            <li>
              <Link
                to="/"
                className={cn(
                  pathname === '/'
                    ? 'text-secondary'
                    : 'font-medium text-primary dark:text-white',
                )}
              >
                Home
              </Link>
            </li>
            {links.map(({ label, items }, index) => (
              <li key={index}>
                <button
                  className={cn(
                    pathname?.includes(`/${label.toLowerCase()}`)
                      ? 'text-secondary'
                      : 'font-medium text-primary',
                  )}
                  onClick={() => handleDropdown(label)}
                >
                  {label}
                </button>
                {openDropdown === label && (
                  <ul className="pl-4">
                    {items?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/${label.toLowerCase()}/${item
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        <li className="py-1">{item}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className={cn(
                  pathname === '/contact'
                    ? 'text-secondary'
                    : 'font-medium text-primary dark:text-white',
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

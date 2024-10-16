"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Logo from "./Logo";
import SearchPage from "./SearchPage";
import ModeToggle from "./ModeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Define links with dropdown menu items
const links: { label: string; items?: string[] }[] = [
  {
    label: "About",
    items: ["Artistic Directors", "Advisory Board", "Team", "Collaborators"],
  },
  {
    label: "Events",
    items: [
      "Corporate Shows",
      "Upcoming Performances",
      "Productions",
      "Special Events",
      "Tours",
      "Wall Of Fame",
    ],
  },
  {
    label: "Gurukul",
    items: [
      "Programmes Offered",
      "Acharya's",
      "Workshops",
      "Students Feedback",
      "Activities",
    ],
  },
  {
    label: "Achievements",
    items: ["Awards", "Media", "Feedbacks"],
  },
  {
    label: "Gallery",
    items: ["Behind The Scene", "Shoots", "Goodies"],
  },
  {
    label: "Support",
    items: ["Support Now", "Book a Performance", "Buy Abhinava's Exclusive"],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track opened dropdown
  const pathname = usePathname();
  const handleClick = () => {
    setIsOpen(false); // Close mobile menu on click
  };

  const handleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null); // Toggle off if already open
    } else {
      setOpenDropdown(label); // Open the dropdown
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 flex items-center px-4 md:px-[120px] py-4 md:py-6 border-b border-2 bg-white dark:bg-black text-primary">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Logo />
            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-[#1B1B1E] dark:to-white">
              Abhinava Dance Company
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center text-base">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/"
                className={cn(
                  pathname === "/" ? "text-secondary" : "text-primary"
                )}
              >
                Home
              </Link>
            </li>
            {links.map(({ label, items }, index) => (
              <li key={index}>
                <HoverCard>
                  <HoverCardTrigger
                    className={cn(
                      "cursor-pointer",
                      pathname?.includes(`/${label.toLowerCase()}`)
                        ? "text-secondary"
                        : "text-primary"
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
                          href={`/${label.toLowerCase()}/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <p
                            className={cn(
                              "relative flex cursor-pointer select-none items-center px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-[#79348D] hover:text-white"
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
                href="/contact"
                className={cn(
                  pathname === "/contact" ? "text-secondary" : "text-primary"
                )}
              >
                Contact
              </Link>
            </li>

            {/* Additional Components */}
            <SearchPage />
            <ModeToggle />
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block">
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg p-4">
          <ul className="flex flex-col gap-4 text-[#313131] dark:text-gray-100">
            <li>
              <Link
                href="/"
                className={cn(
                  pathname === "/" ? "text-secondary" : "text-primary"
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
                      ? "text-secondary"
                      : "text-primary"
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
                        href={`/${label.toLowerCase()}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
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
                href="/contact"
                className={cn(
                  pathname === "/contact" ? "text-secondary" : "text-primary"
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

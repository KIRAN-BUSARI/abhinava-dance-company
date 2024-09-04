"use client";

import Logo from "./Logo";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full sticky flex items-center px-[120px] py-6 border-b border-2">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <div className="flex items-center">
            <Logo />
            <p className="text-lg font-semibold from-[#79348D] to-[#1B1B1E] dark:to-[white] bg-clip-text text-transparent bg-gradient-to-r">
              Abhinava Dance Company
            </p>
          </div>
        </Link>
        <div className="flex text-base">
          <ul className="flex items-center gap-8 text-[#313131] dark:text-gray-100">
            <Link href="/">Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`outline-none active:text-[#79348D]`}
              >
                About
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Artistic Directors</DropdownMenuItem>
                <DropdownMenuItem>Advisory Board</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Collaborators</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none active:text-[#79348D]">
                Events
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Corporate Shows</DropdownMenuItem>
                <DropdownMenuItem>Upcoming Performances </DropdownMenuItem>
                <DropdownMenuItem>Productions</DropdownMenuItem>
                <DropdownMenuItem>Special Events</DropdownMenuItem>
                <DropdownMenuItem>Tours</DropdownMenuItem>
                <DropdownMenuItem>Wall Of Fame</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none active:text-[#79348D]">
                Gurukul
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Programmes Offered</DropdownMenuItem>
                <DropdownMenuItem>Acharya&apos;s</DropdownMenuItem>
                <DropdownMenuItem>Workshops </DropdownMenuItem>
                <DropdownMenuItem>Students Feedback</DropdownMenuItem>
                <DropdownMenuItem>Activities</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none active:text-[#79348D]">
                Achivements
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Awards</DropdownMenuItem>
                <DropdownMenuItem>Media</DropdownMenuItem>
                <DropdownMenuItem>Feedbacks</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none active:text-[#79348D]">
                Gallery
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Behind The Scence</DropdownMenuItem>
                <DropdownMenuItem>Shoots</DropdownMenuItem>
                <DropdownMenuItem>Goodies</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none active:text-[#79348D]">
                Support
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Support Now</DropdownMenuItem>
                <DropdownMenuItem>Book a Performance</DropdownMenuItem>
                <DropdownMenuItem>
                  Buy Abhinava&apos;s Exclusive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contact">Contact</Link>
            <div className="">
              <Search className="text-[#79348D]" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

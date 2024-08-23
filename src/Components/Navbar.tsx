import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full sticky flex items-center px-[120px] py-6 border-b border-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Logo />
          <p className="text-lg font-semibold from-[#79348D] to-[#1B1B1E] bg-clip-text text-transparent bg-gradient-to-r">
            Abhinava Dance Company
          </p>
        </div>
        <div className="flex text-base">
          <ul className="flex items-center gap-8 text-[#313131]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Gurukul</Link>
            <Link href="/contact">Achivements</Link>
            <Link href="/contact">Gallery</Link>
            <Link href="/contact">Support</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

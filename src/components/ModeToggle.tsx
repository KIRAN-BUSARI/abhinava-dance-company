"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "./ui/button";

const toggleIcons = [
  {
    id: "light",
    icon: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  },
  {
    id: "system",
    icon: (
      <svg
        className="with-icon_icon__MHUeb"
        data-testid="geist-icon"
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
      </svg>
    ),
  },
  {
    id: "dark",
    icon: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  },
];
const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [dark, setdark] = useState(true);
  return (
    <div className="flex">
      <Button
        variant="outline"
        onClick={() => {
          dark ? setTheme("dark") : setTheme("light");
          setdark(!dark);
        }}
        size="icon"
        className="outline-none"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ModeToggle;

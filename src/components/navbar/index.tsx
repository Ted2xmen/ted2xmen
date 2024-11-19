"use client";
import { Ampersand, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MENU_ITEMS = [{ name: "About", href: "/about" }];

export const HOME_DATA = {
  name: "home",
  href: "/",
  quickLinks: [
    { name: "tech stack", href: "/stack" },
    { name: "tools", href: "/stack" },
    { name: "bookmarks", href: "/stack" },
  ],

  image:
    "https://pbs.twimg.com/profile_images/1321170490048786436/0EtFIqGA_400x400.jpg",
};
const Navbar = () => {
  const pathname = usePathname();
  const navbarStyle = `
  flex justify-between items-center gap-4 text-sm bg-white text-slate-600 
  border border-gray-200 shadow-md 
  animate-shimmer px-6 py-3 rounded-full
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
`;

  return (
    <div className="mt-8 flex justify-center">
      <nav className={navbarStyle}>
        <Link
          className={`flex items-center gap-1 ${
            pathname === "/" ? "text-primary" : ""
          }`}
          href="/">
          <House className="size-4" /> Home
        </Link>

        <Link
          className={`flex items-center gap-1  ${
            pathname === "/about" ? "text-primary" : ""
          }`}
          href="/about">
          <Ampersand className="size-4" /> About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

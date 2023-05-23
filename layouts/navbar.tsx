import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const dot = <span className="text-secondary-light font-bold">#</span>;

  const menu = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "bookmarks",
      href: "/bookmarks",
    },
    {
      name: "blog",
      href: "/blog",
    },
  ];

  return (
    <nav>
      <ul className="navbar">
        {menu.map((m, index) => {
          return (
            <li key={index} className="custom-link nav-link">
              <Link href={m.href}>
                {currentRoute === m.href && dot} {m.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

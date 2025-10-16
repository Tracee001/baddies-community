import React from "react";
import Link from "next/link";

const navLinksLeft = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/membership",
    label: "Membership",
    dropdown: [
      { href: "/membership/join", label: "Join" },
      { href: "/membership/benefits", label: "Benefits" },
    ],
  },
];

const navLinksRight = [
  {
    href: "/career",
    label: "Career",
    dropdown: [
      { href: "/career/jobs", label: "Jobs" },
      { href: "/career/resources", label: "Resources" },
    ],
  },
  {
    href: "/events",
    label: "Events",
    dropdown: [
      { href: "/events/upcoming", label: "Upcoming" },
      { href: "/events/past", label: "Past" },
    ],
  },
  { href: "/employers", label: "Employers" },
];

const Header: React.FC = () => (
  <header className="bg-white border-b border-gray-200 w-full">
    <nav className="container mx-auto flex items-center justify-between py-4 px-4 pacifico-regular">
      {/* Left nav */}
      <ul className="flex items-center gap-8">
        {navLinksLeft.map((link, idx) =>
          link.dropdown ? (
            <li key={idx} className="relative group">
              {/* Clickable Membership */}
              <Link
                href={link.href!}
                className="font-bold uppercase text-sm text-gray-900 cursor-pointer group-hover:text-pink-600 transition flex items-center"
              >
                {link.label}
                {/* Rotating arrow */}
                <span className="ml-1 text-xs transform transition-transform duration-200 group-hover:rotate-180">
                  &#9660;
                </span>
              </Link>
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded hidden group-hover:block z-10 min-w-[140px]">
                {link.dropdown.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={idx}>
              <Link
                href={link.href}
                className="font-bold uppercase text-sm text-gray-900 hover:text-pink-600 transition"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Logo/title */}
      <Link href="/" className="mx-8 flex items-center BaddiesFont ">
        <span className="font-extrabold text-2xl tracking-tight text-pink-400">
          Baddies in Tech
        </span>
      </Link>

      {/* Right nav */}
      <ul className="flex items-center gap-8">
        {navLinksRight.map((link, idx) =>
          link.dropdown ? (
            <li key={idx} className="relative group">
              {/* Clickable Career & Events */}
              <Link
                href={link.href!}
                className="font-bold uppercase text-sm text-gray-900 cursor-pointer group-hover:text-pink-600 transition flex items-center"
              >
                {link.label}
                {/* Rotating arrow */}
                <span className="ml-1 text-xs transform transition-transform duration-200 group-hover:rotate-180">
                  &#9660;
                </span>
              </Link>
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded hidden group-hover:block z-10 min-w-[140px]">
                {link.dropdown.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={idx}>
              <Link
                href={link.href}
                className="font-bold uppercase text-sm text-gray-900 hover:text-pink-600 transition"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
);

export default Header;

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { name: "Solution", href: "/solution" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const darkGreen = "#008B64";
  const lightGreen = "#00A076";

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrollDirection === "down" && scrolled && !menuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => setActiveLink("/")}
          >
            <div
              className={`border-2 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                scrolled ? "w-8 h-8" : "w-9 h-9"
              }`}
              style={{ borderColor: darkGreen }}
            >
              <span
                className={`font-bold transition-all duration-300 ${
                  scrolled ? "text-sm" : "text-base"
                }`}
                style={{ color: darkGreen }}
              >
                W
              </span>
            </div>

            <span
              className={`font-bold text-gray-900 tracking-tight transition-all duration-300 ${
                scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}
            >
              Wefetch
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="relative px-4 py-2 text-gray-700 transition-all duration-200 font-medium rounded-lg hover:bg-gray-50 group"
              >
                <span
                  className={`relative z-10 transition-colors ${
                    activeLink === link.href ? "font-semibold" : ""
                  }`}
                  style={{
                    color: activeLink === link.href ? darkGreen : undefined,
                  }}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                    activeLink === link.href ? "w-1/2" : "w-0 group-hover:w-1/3"
                  }`}
                  style={{ backgroundColor: darkGreen }}
                />
              </Link>
            ))}

            <Link
              href="/demo"
              className={`ml-4 px-6 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 active:scale-95 ${
                scrolled ? "py-2" : "py-2.5"
              }`}
              style={{
                backgroundColor: darkGreen,
                backgroundImage: `linear-gradient(135deg, ${darkGreen} 0%, ${lightGreen} 100%)`,
              }}
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ "--tw-ring-color": darkGreen } as React.CSSProperties}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMenuOpen(false);
                  }}
                  className="px-4 py-3 text-gray-700 text-lg font-medium rounded-lg transition-all duration-200 hover:bg-gray-50"
                  style={{
                    color: activeLink === link.href ? darkGreen : undefined,
                    backgroundColor:
                      activeLink === link.href ? "#f0fdf9" : undefined,
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/demo"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 text-white text-center rounded-lg font-semibold transition-all duration-200 shadow-md active:scale-95"
                style={{
                  backgroundColor: darkGreen,
                  backgroundImage: `linear-gradient(135deg, ${darkGreen} 0%, ${lightGreen} 100%)`,
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

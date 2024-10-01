"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { throttle } from "lodash";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const SECTIONS = [
  { id: "hero", label: "Start" },
  { id: "streaming", label: "Streaming" },
  { id: "hosting", label: "Hosting" },
  { id: "development", label: "Entwicklung" },
  { id: "contact", label: "Kontakt" },
] as const;

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      SECTIONS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop - viewportHeight / 3 &&
            scrollPosition < offsetTop + offsetHeight - viewportHeight / 3
          ) {
            setActiveSection(id);
          }
        }
      });
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">pudlo.media</div>
          <div className="hidden md:flex space-x-1">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  ${
                    activeSection === id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`block w-full text-left px-6 py-2 text-sm font-medium transition-all duration-300
                ${
                  activeSection === id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import React from "react";
interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "consulting", label: "Consulting" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    // { id: "projects", label: "Projects" },
    { id: "talks", label: "Talks" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-elegant border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a
          href="#about"
          className="font-playfair font-bold text-2xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-lg font-sora font-500 transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-cyan-600 to-teal-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden transition-colors ${
            isScrolled ? "text-slate-700" : "text-slate-900"
          }`}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden bg-white/95 backdrop-blur-sm w-full border-t border-slate-200/50 transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-4 py-3 rounded-lg font-sora font-500 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-cyan-600 to-teal-600"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

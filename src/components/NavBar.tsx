// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to the section and update URL
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    
    // Update URL to match the section
    window.history.pushState(null, '', `#${targetId}`);

    // Get the target element and scroll to it
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Track if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
    
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'neo-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#"
          className="text-2xl font-bold text-gradient transition-transform hover:scale-105 hover:text-accent1"
        >
          HEMANSHU
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleScrollToSection(e, link.href.substring(1))}
              className={`text-white transition-all duration-300 hover:tracking-wider hover:scale-105 ${
                activeSection === link.href.substring(1)
                  ? 'text-accent1 font-bold underline underline-offset-8 decoration-accent1 drop-shadow-glow'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:text-accent1 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden neo-blur animate-fade-in">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleScrollToSection(e, link.href.substring(1));
                }}
                className={`text-white transition-colors duration-300 hover:text-accent1 hover:translate-x-2 ${
                  activeSection === link.href.substring(1)
                    ? 'text-accent1 font-bold underline underline-offset-8 decoration-accent1 drop-shadow-glow'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to the section and update URL
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `/#${targetId}`);
      setActiveSection(targetId);
    }
  };

  // Track if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
          window.history.replaceState(null, '', `/#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial section detection on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }, 100);
      }
    }
  }, [location]);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'neo-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-gradient transition-transform hover:scale-105 hover:text-accent1"
          onClick={(e) => handleScrollToSection(e, 'home')}
        >
          HEMANSHU
        </Link>

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

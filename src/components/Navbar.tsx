import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b border-base-300">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
            <User className="w-6 h-6 mr-2" />
            Joseph Kimani
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`btn btn-ghost ${
                    isActive(item.path) ? 'btn-primary text-primary-content' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle ml-4"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-none lg:hidden">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-base-200 shadow-lg">
          <ul className="menu p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`btn btn-ghost justify-start ${
                    isActive(item.path) ? 'btn-primary text-primary-content' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
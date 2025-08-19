import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { FiSun, FiMoon, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-bg-light dark:bg-bg-dark shadow-md sticky top-0 z-50">
      <nav className="relative sm:px-4 lg:pr-14 lg:pl-14 py-5 shadow mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-4xl font-bold text-gold dark:text-accent-dk">
            Essenzia
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-gold dark:text-accent-dk font-bold hover:border-b' : 'text-text-primary hover:text-gold hover:border-b dark:text-white dark:hover:text-accent-dk font-semibold'}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-gold dark:text-accent-dk font-bold hover:border-b' : 'text-text-primary hover:text-gold hover:border-b dark:text-white dark:hover:text-accent-dk font-semibold'}>
              Shop
            </NavLink>

            {/* Categories Dropdown (After Shop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCategoryOpen(prev => !prev)}
                className="flex items-center text-sm md:text-[16px] font-semibold text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk"
              >
                Categories <BiChevronDown className="ml-1 text-lg" />
              </button>
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-bg-dark shadow-md rounded-md z-50">
                  {['Women', 'Men', 'Unisex', 'Kids'].map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-gold dark:text-accent-dk font-bold hover:border-b' : 'text-text-primary hover:text-gold hover:border-b dark:text-white dark:hover:text-accent-dk font-semibold'}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-gold dark:text-accent-dk font-bold hover:border-b' : 'text-text-primary hover:text-gold hover:border-b dark:text-white dark:hover:text-accent-dk font-semibold'}>
              Contact
            </NavLink>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <button onClick={toggleTheme} className="text-2xl text-text-primary bg-gold dark:text-white dark:bg-accent-dk p-2 rounded dark:hover:text-text-primary hover:text-white">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <Link to="/wishlist" className="relative text-2xl text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk">
              <FiHeart />
              <span className="absolute -top-2 -right-2 text-sm bg-gold dark:bg-accent-dk text-gold rounded-full px-1 ">
                
              </span>
            </Link>

            <Link to="/cart" className="hidden md:flex items-center gap-2 text-2xl text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk hover:bg-opacity-80 px-3 py-3 rounded-2xl transition-all duration-300">
              <FiShoppingCart />
            </Link>

            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl text-text-primary dark:text-white">
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-bg-light dark:bg-bg-dark px-6 py-4 space-y-4">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'block text-gold dark:text-accent-dk font-semibold hover:border-b' : 'block text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk hover:border-b'}>
              Home
            </NavLink>
            <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'block text-gold dark:text-accent-dk font-semibold hover:border-b' : 'block text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk hover:border-b'}>
              Shop
            </NavLink>

            {/* Categories Dropdown (Mobile) */}
            <div>
              <button
                onClick={() => setIsMobileCategoryOpen(prev => !prev)}
                className="flex items-center justify-between w-full text-sm font-semibold text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk"
              >
                Categories <BiChevronDown className={`ml-1 transform ${isMobileCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileCategoryOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  {['Women', 'Men', 'Unisex', 'Kids'].map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat.toLowerCase()}`}
                      className="block text-sm text-gray-700 dark:text-white hover:text-gold dark:hover:text-accent-dk"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileCategoryOpen(false);
                      }}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'block text-gold dark:text-accent-dk font-semibold hover:border-b' : 'block text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk hover:border-b'}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'block text-gold dark:text-accent-dk font-semibold hover:border-b' : 'block text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk hover:border-b'}>
              Contact
            </NavLink>

            <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-[15px] text-text-primary dark:text-white hover:text-gold dark:hover:text-accent-dk">
              <span>Cart</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

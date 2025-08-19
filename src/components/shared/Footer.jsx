import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Categories', path: '#' }, // keep '#' for now if you don’t have this page
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

  return (
    <footer className="bg-bg-light dark:bg-bg-dark text-text-primary dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Logo + Menu */}
        <div className="flex flex-col md:flex-row pl-14 pr-14 justify-between items-center border-b border-text-primary dark:border-white pb-8 mb-8 gap-6">
          <div className="text-4xl font-bold tracking-wide text-gold dark:text-accent-dk">
            Essenzia
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-[18px] font-semibold ">
            {menuLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:text-gold dark:hover:text-accent-dk transition-colors duration-300">
  {link.name}
</Link>

              </li>
            ))}
          </ul>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pl-8">

          {/* Subscribe */}
          <div>
            <h3 className="text-4xl sm:text-3xl font-bold mb-3 text-gold dark:text-accent-dk">
              Subscribe Today!
            </h3>
            <p className="mb-4">Stay updated with the latest collection.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="px-4 py-3 rounded bg-white text-text-primary border border-gold dark:border-accent-dk focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-gold dark:bg-accent-dk text-white px-4 py-3 rounded font-semibold w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className='lg:ml-10'>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gold dark:text-accent-dk">
              Explore
            </h3>
            <ul className="space-y-2 font-semibold">
              <li><a href="/about" className="hover:text-gold dark:hover:text-accent-dk">About Us</a></li>
              <li><a href="#" className="hover:text-gold dark:hover:text-accent-dk">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gold dark:hover:text-accent-dk">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold dark:hover:text-accent-dk">Support</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gold dark:text-accent-dk">
              Social Media
            </h3>
            <ul className="space-y-2 font-semibold">
              <li className="flex items-center gap-2">
                <FaInstagram /> <a href="https://www.instagram.com/essenzia.oud?igsh=YzljYTk1ODg3Zg==" target="_blank" className="hover:text-gold dark:hover:text-accent-dk">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookF /> <a href="https://www.facebook.com/essenziaofficial" target="_blank" className="hover:text-gold dark:hover:text-accent-dk">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedinIn /> <a href="https://www.linkedin.com/company/essenziahealth/" target="_blank" className="hover:text-gold dark:hover:text-accent-dk">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter /> <a href="https://mobile.twitter.com/Essenzia/status/1570847774593417216" target="_blank" className="hover:text-gold dark:hover:text-accent-dk">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center border-t pt-4 border-text-primary dark:border-white text-sm font-semibold">
          &copy; 2025 <span className="text-gold dark:text-accent-dk font-bold">Essenzia</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

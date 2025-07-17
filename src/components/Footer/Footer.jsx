import React from "react";
import footerLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1f1f1f] via-[#2e2e2e] to-[#1f1f1f] text-white pt-16 pb-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="logo" className="w-12 h-12" />
              <h1 className="text-2xl font-semibold tracking-wide">Shopify</h1>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Discover elegance in every thread. Shopify brings you the finest in
              style and comfort, curated just for you.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">
                Explore
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><a href="/#" className="hover:text-[#d4af37] transition-colors duration-200 block">Home</a></li>
                <li><a href="/top-rated" className="hover:text-[#d4af37] transition-colors duration-200 block">Top rated</a></li>
                <li><a href="/mens-wear" className="hover:text-[#d4af37] transition-colors duration-200 block">Men</a></li>
                <li><a href="/womens-wear" className="hover:text-[#d4af37] transition-colors duration-200 block">Women</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">
                Quick Links
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><a href="/#" className="hover:text-[#d4af37] transition-colors duration-200 block">Home</a></li>
                <li><a href="/#about" className="hover:text-[#d4af37] transition-colors duration-200 block">About</a></li>
                <li><a href="/#contact" className="hover:text-[#d4af37] transition-colors duration-200 block">Contact</a></li>
                <li><a href="/#blog" className="hover:text-[#d4af37] transition-colors duration-200 block">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">
              Contact & Social
            </h2>

            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>

            <div className="text-sm text-gray-400 space-y-3">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-[#d4af37]" />
                <p>Saharanpur, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-[#d4af37]" />
                <p>+91 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

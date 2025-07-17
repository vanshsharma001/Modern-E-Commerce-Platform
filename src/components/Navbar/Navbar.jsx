import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CreateContext";

const Navbar = ({ setSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(searchInput);
      
    }
  };

  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Top Rated", link: "/top-rated" },
    { id: 3, name: "Mens Wear", link: "/mens-wear" },
    { id: 4, name: "Womens Wear", link: "/womens-wear" },
  ];

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="shadow-md bg-white text-black z-50   w-full">
      <div className="bg-primary/10 py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-2xl font-semibold">
            <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
            <span className="text-gray-900">Shopify</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearch}
                className="w-[120px] sm:w-[150px] group-hover:w-[140px] sm:group-hover:w-[260px] transition-all duration-300 border border-gray-300 rounded-full px-4 py-1 text-sm bg-white focus:outline-none"
              />
              <IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="bg-gradient-to-r from-[#d4af37] to-[#c29200] hover:scale-105 transition-all duration-200 text-white py-1.5 px-3 md:px-4 rounded-full flex items-center gap-2 shadow-sm relative"
            >
              <span className="hidden sm:block font-medium">Cart</span>
              <FaCartShopping className="text-lg" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#c29200] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <div className="sm:hidden">
              {mobileMenuOpen ? (
                <IoClose className="text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
              ) : (
                <HiMenuAlt3 className="text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="bg-white border-t border-gray-200 hidden sm:block">
        <div className="container mx-auto flex justify-center px-4 py-3">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-gray-700 hover:text-[#d4af37] transition-all duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white px-6 py-5 border-t border-gray-200 shadow-md animate-slideDown">
          <ul className="flex flex-col gap-4 text-sm font-semibold">
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-800 hover:text-[#d4af37] transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useCart } from "../../context/CreateContext";

const ProductCard = ({ img, title, rating, color, price, oldprice, id, aosDelay }) => {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleCartClick = () => {
    addToCart({ img, title, rating, color, price, oldprice, id });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 700);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[300px] group relative"
    >
      {/* Image Section */}
      <div className="relative ">
        <img
          src={img}
          alt={title}
          className="h-[170px]  sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] w-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
        />

        {/* Desktop Add to Cart */}
        <div className="hidden md:flex absolute inset-0 bg-black/30 justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleCartClick}
            className="w-full py-1.5 text-center bg-gradient-to-r from-[#d4af37] to-[#c29200] text-white text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>

        {/* Favorite icon */}
        <div className="absolute top-2 right-2 z-10">
          <button className="bg-white text-gray-700 hover:text-[#d4af37] rounded-full p-2 shadow-md transition-colors duration-200">
            <FaHeart className="text-sm" />
          </button>
        </div>

        {/* Subtle Feedback Message */}
        {showMessage && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#c29200] text-white text-xs px-3 py-1 rounded-full shadow-md opacity-90 transition-opacity duration-300 z-20">
            Added to Cart
          </div>
        )}
      </div>

      {/* Mobile Add to Cart */}
      <div className="block md:hidden mt-2 px-3">
        <button
          onClick={handleCartClick}
          className={`w-full flex justify-center items-center gap-2 py-1 text-sm font-semibold rounded-md bg-gradient-to-r from-[#d4af37] to-[#c29200] text-white
`}
 >
          <FaCartPlus className="text-sm" />
          Add to Cart
        </button>
      </div>

      {/* Info Section */}
      <div className="p-2 md:p-3 space-y-1 md:space-y-1.5">
        <h3 className="font-semibold text-gray-800 dark:text-white text-base">{title}</h3>
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-500 dark:text-gray-400">{color}</p>
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <FaStar className="text-[#facc15]" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#016c0f] font-semibold text-[15px]">₹{price}</span>
          <span className="line-through text-gray-500 text-sm">₹{oldprice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

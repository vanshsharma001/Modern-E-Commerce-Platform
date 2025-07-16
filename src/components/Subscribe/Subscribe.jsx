import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Subscribe = () => {
  return (
    <div className="mb-20 text-white" style={BannerImg}>
      <div className="container py-16 backdrop-blur-sm bg-black/40">
        <div className="max-w-2xl mx-auto text-center space-y-6 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            Get Notified About <span className="text-[#d4af37]">New Products</span>
          </h1>
          <p className="text-sm text-gray-200">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>

          {/* Input & Button */}
          <form
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[350px] px-5 py-3 rounded-full text-black bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder:text-sm"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#d4af37] to-[#c29200] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

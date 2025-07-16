import React from "react";
import ProductsData from "../../data/productsData";
import ProductListPage from "./ProductListPage";

const Products = ({ search }) => {
  return (
    <section className="py-16 bg-white transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-[#d4af37] font-medium">
            Top Selling Products for You
          </p>
          <h2 data-aos="fade-up" className="text-3xl font-bold text-black">
            Featured Products
          </h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
            Discover our most loved picks—carefully selected for style, comfort and quality.
          </p>
        </div>
        <ProductListPage products={ProductsData} search={search} />
      </div>
    </section>
  );
};

export default Products;
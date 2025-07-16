import React, { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import ProductCard from "./ProductCard";

const ProductListPage = ({ title, products, search = "" }) => {
  const [sort, setSort] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const filteredProducts = products
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (genderFilter ? item.category === genderFilter : true))
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="p-1 md:pd-6 ">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}

      <FilterBar
        sort={sort}
        setSort={setSort}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductListPage;

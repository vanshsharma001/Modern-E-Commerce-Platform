import React, { useState } from "react";
import ProductsData from "../data/productsData";
import ProductCard from "../components/Products/ProductCard";
import FilterBar from "../components/FilterBar/FilterBar";

const WomensWear = () => {
  const [sort, setSort] = useState("");

  // Only women's products
  let womensItems = ProductsData.filter((item) => item.category === "women");

  // Sorting
  if (sort === "price") {
    womensItems.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    womensItems.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Women's Wear</h2>

      <FilterBar
        search={""}
        setSearch={() => {}}
        sort={sort}
        setSort={setSort}
        genderFilter={"women"}
        setGenderFilter={() => {}}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
        {womensItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WomensWear;

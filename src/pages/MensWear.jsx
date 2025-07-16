import React, { useState } from "react";
import ProductsData from "../data/productsData";
import ProductCard from "../components/Products/ProductCard";
import FilterBar from "../components/FilterBar/FilterBar";

const MensWear = () => {
  const [search, setSearch] = useState(""); // ✅ add search state
  const [sort, setSort] = useState("");

  // Filter men's items
  let mensItems = ProductsData.filter((item) => item.category === "men");

  // Apply search
  if (search) {
    mensItems = mensItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply sorting
  if (sort === "price") {
    mensItems.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    mensItems.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Men's Wear</h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        genderFilter={"men"}
        setGenderFilter={() => {}}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
        {mensItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MensWear;

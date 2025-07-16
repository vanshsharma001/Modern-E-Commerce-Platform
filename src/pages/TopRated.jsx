import React, { useState } from "react";
import ProductsData from "../data/productsData";
import ProductCard from "../components/Products/ProductCard";
import FilterBar from "../components/FilterBar/FilterBar";

const TopRated = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  let topRatedItems = ProductsData.filter((item) => item.rating >= 4.5);

  // Apply filters
  if (search) {
    topRatedItems = topRatedItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (genderFilter) {
  topRatedItems = topRatedItems.filter(
    (item) => item.category === genderFilter
  );
}


  if (sort === "price") {
    topRatedItems.sort((a, b) => a.discount - b.discount);
  } else if (sort === "rating") {
    topRatedItems.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Rated Products</h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
        {topRatedItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TopRated;

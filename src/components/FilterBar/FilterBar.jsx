import React from "react";

const FilterBar = ({ sort, setSort, genderFilter, setGenderFilter }) => {
  return (
    <div className="flex sm:flex-row items-center justify-end gap-4 mb-6 px-2">
      {/* Sort Dropdown */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-1 py-1 rounded text-sm appearance-none text-gray-700 w-[100px]"
        style={{ fontSize: "10px" }}
      >
        <option className="text-xs" value="">
          Sort By
        </option>
        <option className="text-xs" value="price">
          Price
        </option>
        <option className="text-xs" value="rating">
          Rating
        </option>
      </select>

      {/* Gender Filter */}
      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
        className="border px-1 py-1 rounded text-sm appearance-none text-gray-700 w-[100px]"
        style={{ fontSize: "10px" }}
      >
        <option className="text-xs" value="">
          All
        </option>
        <option className="text-xs" value="men">
          Men
        </option>
        <option className="text-xs" value="women">
          Women
        </option>
      </select>
    </div>
  );
};

export default FilterBar;

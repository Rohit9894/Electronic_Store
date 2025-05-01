import React, { useState } from "react";

function FilterSortAndPopularity() {
  const [filter, setFilter] = useState("all");
  function handleFilter(value) {
    setFilter(value);
  }
  return (
    <div className="flex text-sm gap-4">
      <h2 className=" font-medium">Sort By</h2>
      <div
        onClick={() => handleFilter("lth")}
        className={`${
          filter === "lth"
            ? "active-sort-and-popularity-item"
            : "sort-and-popularity-item"
        }`}
      >
        Price -- Low to High
      </div>
      <div
        onClick={() => handleFilter("htl")}
        className={`${
          filter === "htl"
            ? "active-sort-and-popularity-item"
            : "sort-and-popularity-item"
        }`}
      >
        Price -- High to Low
      </div>
      <div
        onClick={() => handleFilter("new")}
        className={`${
          filter === "new"
            ? "active-sort-and-popularity-item"
            : "sort-and-popularity-item"
        }`}
      >
        Newest First
      </div>
      <div
        onClick={() => handleFilter("all")}
        className={`${
          filter === "all"
            ? "active-sort-and-popularity-item"
            : "sort-and-popularity-item"
        }`}
      >
        All Products
      </div>
    </div>
  );
}

export default FilterSortAndPopularity;

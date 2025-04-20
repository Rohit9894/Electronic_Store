import PopularSearchItem from "@/components/miscellaneous/PopularSearchItem";
import ProductBanner from "@/components/miscellaneous/ProductBanner";
import ProductItem from "@/components/miscellaneous/ProductItem";
import { Slider } from "@/components/ui/slider";
import { fetchProducts } from "@/features/product/product.slice";
import { store } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Laptop = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  function handleFilter(value) {
    console.log(value);
    setFilter(value);
  }
  console.log(filter);
  const { items, loading, error } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // console.log(store.getState());
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-12 md:gap-10">
        {/* Filter Box */}
        <div className="col-span-3">
          <h2 className="text-md font-medium mt-10">Filters</h2>
          <div className="mt-8">
            <h4 className="text-md mb-4">Price range</h4>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
        {/* Products Section  */}
        <div className="col-span-9 ">
          <div className="mb-8 flex justify-between items-baseline">
            <h2 className="font-medium">Laptops Products</h2>
            {/* sort and populirity */}
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
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
            {items.map((item, index) => (
              <ProductItem key={item?.id} productData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;

import FilterSortAndPopularity from "@/components/miscellaneous/FilterSortAndPopularity";
import PopularSearchItem from "@/components/miscellaneous/PopularSearchItem";
import ProductBanner from "@/components/miscellaneous/ProductBanner";
import ProductItem from "@/components/miscellaneous/ProductItem";
import LaptopSkeleton from "@/components/miscellaneous/skeleton/LaptopSkeleton";
import SomeThingWentWrong from "@/components/miscellaneous/uiErrors/SomeThingWentWrong";
import { Slider } from "@/components/ui/slider";
import { fetchProducts } from "@/features/product/product.slice";
import { store } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Laptop = () => {
  const dispatch = useDispatch();
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
            <FilterSortAndPopularity />
          </div>
          {error ? (
            <SomeThingWentWrong />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
              {loading
                ? Array.from({ length: 8 }).map((item, i) => (
                    <LaptopSkeleton key={i} />
                  ))
                : items.map((item, index) => (
                    <ProductItem key={item?.id} productData={item} />
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laptop;

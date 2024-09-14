import PopularSearchItem from "@/components/miscellaneous/PopularSearchItem";
import ProductBanner from "@/components/miscellaneous/ProductBanner";
import ProductItem from "@/components/miscellaneous/ProductItem";
import React from "react";

const Laptop = () => {
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-12 gap-10">
        <div className="bg-light col-span-3">
          Filter Box
        </div>
        <div className="col-span-9">
          <ProductBanner />
        <div className="mt-12 grid grid-cols-3 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
            <ProductItem />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;

import PopularSearchItem from "@/components/miscellaneous/PopularSearchItem";
import ProductBanner from "@/components/miscellaneous/ProductBanner";
import ProductItem from "@/components/miscellaneous/ProductItem";
import React from "react";

const Laptop = () => {
  const [data,setData]
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-12 md:gap-10">
        <div className=" hidden lg:block bg-light col-span-3">
          Filter Box
        </div>
        <div className="col-span-12 md:col-span-9">
         <div className="hidden lg:hidden"> <ProductBanner /></div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
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

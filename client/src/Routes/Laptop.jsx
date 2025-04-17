import PopularSearchItem from "@/components/miscellaneous/PopularSearchItem";
import ProductBanner from "@/components/miscellaneous/ProductBanner";
import ProductItem from "@/components/miscellaneous/ProductItem";
import { fetchProducts } from "@/features/product/product.slice";
import { store } from "@/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Laptop = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((store) => store.products);
  useEffect(() => {
    console.log("Hello World")
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(store.getState())
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-12 md:gap-10">
        <div className=" hidden lg:block bg-light col-span-3">Filter Box</div>
        <div className="col-span-12 md:col-span-9">
          <div className="hidden lg:hidden">
            {" "}
            <ProductBanner />
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
            {items.map((item, index) => (
              <ProductItem key={item?.id} productData={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;

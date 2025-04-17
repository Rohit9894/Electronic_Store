import { Star } from "lucide-react";
import React from "react";
import Rating from "./Rating";
import NumberRating from "./NumberRating";
import { Button } from "../ui/button";

function ProductItem({ productData }) {
  const { name, description, price } = productData;
  return (
    <div className="h-max-content  flex flex-col justify-between  bg-white rounded-lg shadow-custom cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        className="w-full h-[200px] object-cover rounded-t-lg "
      />
      <div className="py-4 px-4 text-center">
        <div className="text-left">
          <h1 className="text-lg mb-1  font-semibold line-clamp-1">{name}</h1>
          <p className="text-sm line-clamp-2">{description}</p>
        </div>
        <div className="flex items-center justify-between w-full gap-2 mt-2">
          <div className="flex items-center gap-2">
            <h2 className="font-medium text-background">₹ {price} </h2>
            <p className="text-sm line-through text-teal-500  text-teal">
              ₹ 9999
            </p>
            <span className="text-xs">30% off</span>
          </div>
          <NumberRating />
        </div>
        <div>
          <Button
            variant="outline"
            className="bg-white border-2 border-background  w-full text-background mt-4"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

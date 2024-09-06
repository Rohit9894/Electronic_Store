import { Star } from "lucide-react";
import React from "react";
import Rating from "./Rating";

function PopularSearchItem() {
  return (
    <div className="w-full h-80  flex flex-col justify-between  bg-white rounded-lg shadow-custom">
      <img
        src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        className="w-full h-[60%] object-cover rounded-t-lg "
      />
      <div className="py-4 px-4 text-center">
        <div className="">
          <h2 className="font-medium text-background mb-2">₹ 1999 </h2>
          <h3 className="text-sm line-through text-teal-500 ml-2">₹ 9999</h3>
        </div>
        <h1 className="text-md mb-4  font-semibold">Smart Watch</h1>
      </div>
    </div>
  );
}

export default PopularSearchItem;

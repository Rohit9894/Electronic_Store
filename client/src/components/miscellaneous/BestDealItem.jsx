import { Star } from "lucide-react";
import React from "react";
import Rating from "./Rating";

function BestDealItem() {
  return (
    <div className=" h-[120px] mt-10  flex gap-4 justify-between">
      <div className="w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image"
          className="w-full h-full object-cover rounded-md "
        />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-sm font-medium">Fitness and Activity Tracker</h2>
        <div>
          <h2 className="text-sm font-medium text-background mb-2">₹ 1999</h2>
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default BestDealItem;

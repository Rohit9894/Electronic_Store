
import React from "react";
import Rating from "./Rating";

function BestDealItem() {
  {/* <div className="w-full bg-background py-4 md:h-60 rounded-lg flex md:!flex-row flex-col md:items-center gap-8"> */}
  return (
    <div className=" md:h-[120px] mt-10  flex md:!flex-row flex-col  gap-4 items-center p-2">
      <div className="full md:w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image"
          className="w-full h-full object-cover rounded-md "
        />
      </div>

      <div className="flex flex-col text-center md:text-left justify-between">
        <h2 className="text-sm font-medium">Fitness and Activity Tracker</h2>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-sm font-medium text-primary mb-2">₹ 1999</h2>
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default BestDealItem;

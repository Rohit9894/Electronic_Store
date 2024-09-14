import { Delete, Minus, Plus, Trash2 } from "lucide-react";
import React from "react";

function CheckoutItem() {
  return (
    <div className="flex p-2.5 shadow-custom rounded-md w-full ">
      <div className="custom_center gap-4 flex-shrink-0">
        <input className="size-3.5 cursor-pointer" type="checkbox" />
        <img
          src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image"
          className="size-20 object-cover rounded-md "
        />
      </div>
      <div className=" w-full ml-10 box-border">
        <h1 className="text-lg  font-semibold">HP Pavillion</h1>
        <h2 className="font-medium text-background text-lg">₹ 1999 </h2>
        <div className="custom_center gap-6 justify-end ">
          <div className="flex text-teal items-center py-1 px-2 justify-between w-32 border-2 5 border-teal border-solid rounded-md">
            <Minus cursor={"pointer"} size={"20px"} />
            <span className="text-black"> 1</span>
            <Plus cursor={"pointer"} size={"20px"} />
          </div>

          <div className="text-teal p-2 rounded-md shadow-custom">
            <Trash2 size={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;

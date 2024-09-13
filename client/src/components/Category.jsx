import React from "react";
import { Link } from "react-router-dom";

function Category() {
  const category = [
    {
      id: 1,
      title: "All Categories",
      to: "/",
    },
    {
      id: 2,
      title: "Accessories",
      to: "/",
    },
    {
      id: 3,
      title: "Smartphone",
      to: "/",
    },
    {
      id: 4,
      title: "Laptop",
      to: "/laptop",
    },
    {
      id: 5,
      title: "Earphone",
      to: "/",
    },
    {
      id: 6,
      title: "Headphone",
      to: "/",
    },
    {
      id: 7,
      title: "SIM",
      to: "/",
    },
    {
      id: 8,
      title: "Bluetooth Speakers",
      to: "/",
    },
  ];
  return (
    <div className=" container custom_center justify-between mt-5">
      {category.map((item) => (
        <Link to={item?.to}>
          <p
            key={item.id}
            className="text-sm p-2 cursor-pointer hover:bg-background hover:text-white hover:rounded-lg "
          >
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Category;

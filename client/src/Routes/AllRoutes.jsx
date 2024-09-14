import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Laptop from "./Laptop";
import SingleItem from "./SingleItem";
import Checkout from "./Checkout";
import PlaceOrder from "./PlaceOrder";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/laptop/:id" element={<SingleItem />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-details" element={<PlaceOrder />} />
    </Routes>
  );
}

export default AllRoutes;

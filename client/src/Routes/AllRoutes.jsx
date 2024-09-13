import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Laptop } from "lucide-react";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/laptop" element={<Laptop />} />
    </Routes>
  );
}

export default AllRoutes;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Laptop from "./Laptop";
import SingleItem from "./SingleItem";
import Checkout from "./Checkout";
import PlaceOrder from "./PlaceOrder";
import Auth from "./Auth";
import PrivateRoute from "@/components/auth/PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Auth />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/laptop/:id" element={<SingleItem />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-details" element={<PlaceOrder />} />
    </Routes>
  );
}

export default AllRoutes;

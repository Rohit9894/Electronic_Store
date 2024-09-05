import React from "react";
import TopNavbar from "./TopNavbar";
import Logo from "./miscellaneous/Logo";
import { Input } from "./ui/input";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import Category from "./Category";

function Navbar() {
  return (
    <div>
      {/*Top Navbar*/}
      <TopNavbar />
      {/* Navbar */}
      <div className="container mt-5 custom_center justify-between">
        <Logo />
        {/* Search bar */}
        <div className="w-1/2 relative">
          <Input
            type="search"
            placeholder="Search here..."
            className="full pl-4 bg-input_bg"
          />
          <Search
            color="#ff7020"
            size={"20px"}
            strokeWidth={3}
            className="absolute right-4 top-2 "
          />
        </div>
        {/* cart */}
        <ShoppingBag />

        <Button className="bg-background">
          <User size="20px" className="mr-2" /> MY ACCOUNT
        </Button>
      </div>

      {/* Category */}
      <Category />
    </div>
  );
}

export default Navbar;

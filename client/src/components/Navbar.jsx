import React from "react";
import TopNavbar from "./TopNavbar";
import Logo from "./miscellaneous/Logo";
import { Input } from "./ui/input";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import Category from "./Category";

function Navbar() {
  return (
    <nav>
      {/*Top Navbar*/}
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      {/* Navbar */}
      <div className="container">
        <div className=" mt-5 custom_center justify-between">
          <Logo />
          {/* Search bar */}
          <div className="hidden md:block w-1/2 relative">
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
          <div className="custom_center gap-4">
            <ShoppingBag />
            <Button className="bg-background">
              <User size="20px" className="mr-2" />
              <span className="hidden md:block uppercase">My Account</span>
            </Button>
          </div>
        </div>
        <div className=" md:hidden w-full mt-2 relative">
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
      </div>

      {/* Category */}
      {/* <Category /> */}
    </nav>
  );
}

export default Navbar;

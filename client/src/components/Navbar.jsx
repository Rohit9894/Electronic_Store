import React from "react";
import TopNavbar from "./TopNavbar";
import Logo from "./miscellaneous/Logo";
import { Input } from "./ui/input";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import Category from "./Category";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/*Top Navbar*/}
      <div>
        <TopNavbar />
      </div>
      {/* Navbar */}
      <div className="container">
        <div className=" mt-5 custom_center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          {/* Search bar */}
          <div className="hidden md:block w-1/2 relative">
            <Input
              type="search"
              placeholder="Search here..."
              className="full pl-4 bg-secondary"
            />
            <Search
              size={"20px"}
              strokeWidth={3}
              className="absolute right-4 top-2 text-primary"
            />
          </div>
          {/* cart */}
          <div className="custom_center gap-4">
            <Link to="/checkout">
              {" "}
              <ShoppingBag className="text-primary hover:text-primary/90 cursor-pointer" />
            </Link>
            <Link to="/login">
              <Button className="bg-primary">
                <User size="20px" className="mr-2" />
                <span className="hidden md:block uppercase">My Account</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className=" md:hidden w-full mt-2 relative">
          <Input
            type="search"
            placeholder="Search here..."
            className="full pl-4 bg-input_bg"
          />
          <Search
            size={"20px"}
            strokeWidth={3}
            className="absolute right-4 top-2 text-primary "
          />
        </div>
      </div>

      {/* Category */}
      <Category />
    </nav>
  );
}

export default Navbar;

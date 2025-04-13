import { Star } from "lucide-react";
import React from "react";

function Rating() {
  return (
    <div className="flex">
      {[...Array(5)].map((i, ind) => (
        <Star size={"15px"} color="hsl(45, 100%, 50%)" fill="hsl(45, 100%, 50%)" />
      ))}
    </div>
  );
}

export default Rating;

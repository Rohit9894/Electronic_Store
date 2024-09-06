import { Star } from "lucide-react";
import React from "react";

function Rating() {
  return (
    <div className="flex">
      {[...Array(5)].map((i, ind) => (
        <Star size={"15px"} color="#ff7020" fill="#ff7020" />
      ))}
    </div>
  );
}

export default Rating;

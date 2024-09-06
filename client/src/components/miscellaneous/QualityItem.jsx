import { BadgeIndianRupee, Clock, History, Star, Truck, Wallet } from "lucide-react";
import React from "react";

function QualityItem({ icon, title, subTitle }) {
  return (
    <div className="w-1/6 text-center  relative py-6 shadow-custom">
      {icon == "truck" && (
        <Truck
          fill="#ff7020"
          color="#ff7020"
          size={40}
          className="absolute -top-5 left-16 z-10"
        />
      )}
      {icon == "star" && (
        <Star
          fill="#ff7020"
          color="#ff7020"
          size={40}
          className="absolute -top-5 left-16 z-10"
        />
      )}
      {icon == "clock" && (
        <History
          // fill="#ff7020"
          color="#ff7020"
          size={40}
          className="absolute -top-5 left-16 z-10"
        />
      )}
      {icon == "price" && (
        <BadgeIndianRupee
          // fill="#ff7020"
          color="#ff7020"
          size={40}
          className="absolute -top-5 left-16 z-10"
        />
      )}
      {icon == "payment" && (
        <Wallet
          fill="#ff7020"
          color="#ff7020"
          size={40}
          className="absolute -top-5 left-16 z-10"
        />
      )}
      <h1 className="font-bold">{title}</h1>
      <span className="text-sm text-teal-500">{subTitle}</span>
    </div>
  );
}

export default QualityItem;

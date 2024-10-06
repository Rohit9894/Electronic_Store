import { BadgeIndianRupee, Clock, History, Star, Truck, Wallet } from "lucide-react";
import React from "react";

function QualityItem({ icon, title, subTitle }) {
  return (
    <div className="text-center   py-6 px-2 shadow-custom">
      {icon == "truck" && (
        <Truck
          fill="#ff7020"
          color="#ff7020"
          size={40}
          className="mx-auto -mt-12"
        />
      )}
      {icon == "star" && (
        <Star
          fill="#ff7020"
          color="#ff7020"
          size={40}
          className="mx-auto -mt-12"
        />
      )}
      {icon == "clock" && (
        <History
          // fill="#ff7020"
          color="#ff7020"
          size={40}
          className="mx-auto -mt-12"
        />
      )}
      {icon == "price" && (
        <BadgeIndianRupee
          // fill="#ff7020"
          color="#ff7020"
          size={40}
          className="mx-auto -mt-12"
        />
      )}
      {icon == "payment" && (
        <Wallet
          fill="#ff7020"
          color="#ff7020"
          size={40}
          className="mx-auto -mt-12"
        />
      )}
      <h1 className="font-bold">{title}</h1>
      <span className="text-sm text-teal-500">{subTitle}</span>
    </div>
  );
}

export default QualityItem;

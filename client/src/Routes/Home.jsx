import BestDealItem from "@/components/miscellaneous/BestDealItem";
import QualityItem from "@/components/miscellaneous/QualityItem";
import { MultiSlider } from "@/components/Slider/MultiSlider";
import { MultiItemSlider } from "@/components/Slider/MutliItemSlider";
import { SaleSlider } from "@/components/Slider/SaleSlider";
import Slider from "@/components/Slider/Slider";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRightCircle,
  StepBack,
  Truck,
} from "lucide-react";

import React, { useRef } from "react";

function Home() {
  const left = useRef();
  const right = useRef();
  // const leftDisabled = left.current.disabled;
  // const rightDisabled = right.current.disabled;

  return (
    <div>
      {/* Slider */}
      <div className="container box-border">
        <Slider />
      </div>

      {/* Best Deals */}
      <section className="container mt-24 " id="best deals">
        <h1 className="text-2xl font-bold">Best Deals</h1>
        <div className="flex justify-between flex-wrap gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <BestDealItem />
          ))}
        </div>
      </section>

      {/* Top Slected Deals */}
      <section className="bg-input_bg  mt-24">
        <div className="container h-80 custom_center">
          <div className="w-1/4 h-full flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-semibold w-[200px] leading-7">
              Top 10 Product Selected On The Week
            </h1>
            <div className="custom_center gap-2">
              <ChevronLeftCircle
                cursor={"pointer"}
                onClick={() => left?.current?.click()}
              />
              <ChevronRightCircle
                cursor={"pointer"}
                onClick={() => right?.current?.click()}
              />
            </div>
          </div>
          <div className="w-full">
            <MultiSlider left={left} right={right} />
          </div>
        </div>
      </section>

      {/* Popular Search */}
      <section className="container mt-24 " id="best deals">
        <h1 className="text-2xl font-bold">Popular Search</h1>
        <div className="mt-10">
          <MultiItemSlider />
        </div>
      </section>

      {/* Qualieties */}
      <section className="container mt-24 custom_center gap-4 justify-center">
        <QualityItem
          icon="truck"
          title={"Free Delivery"}
          subTitle={"For ₹ 40 "}
        />
        <QualityItem icon="star" title={"Best Quality"} subTitle={"Brand "} />
        <QualityItem icon="clock" title={"Easy Return"} subTitle={"Product "} />
        <QualityItem
          icon="price"
          title={"Best Price"}
          subTitle={"In the Market"}
        />
        <QualityItem icon="payment" title={"Payment"} subTitle={"Secure"} />
      </section>
      {/* Flash Sale */}
      <section className="container mt-24">
        <div className="w-full bg-background h-60 rounded-lg custom_center gap-8">
          <div className="w-1/3 text-white pl-10">
            <h1 className="text-2xl font-semibold">Flash Sale</h1>
            <p className="text-sm font-light mt-5">
              Don't miss out on our incredible electronics sale! Get up to 50%
              off on top brands, including smartphones and more.
            </p>
            <h1 className="text-2xl font-semibold tracking-wider mt-10">
              05 : 42 : 50
            </h1>
          </div>
          <div className="w-full pr-10">
            <SaleSlider />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

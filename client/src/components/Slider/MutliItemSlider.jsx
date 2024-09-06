import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TopSlectedItem from "../miscellaneous/TopSelectedItem";
import PopularSearchItem from "../miscellaneous/PopularSearchItem";

export function MultiItemSlider({ left, right }) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/5">
            <PopularSearchItem />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" ref={left} />
      <CarouselNext className="hidden" ref={right} />
    </Carousel>
  );
}

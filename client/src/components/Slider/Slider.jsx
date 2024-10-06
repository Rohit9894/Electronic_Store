import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
function Slider() {
  return (
    <Carousel
      // opts={{
      //   loop: true,
      // }}
      plugins={[
        AutoPlay({
          delay: 2000,
        }),
      ]}
      className="  w-full  mt-10 mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-[250px] md:h-[350px]">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://img.freepik.com/free-photo/beautiful-mystery-box-collage_23-2149704181.jpg?t=st=1725534769~exp=1725538369~hmac=87e028ea4e3612086be634091ec736e338b2a26ecd06739a6ec03e2bdcb83b58&w=900"
              alt="Super Deal"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
  );
}

export default Slider;

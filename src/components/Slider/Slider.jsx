import {
  Carousel,
  CarouselContent,
  CarouselItem,


} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
function Slider({data}) {

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
        {data?.images.map((item, index) => (
          <CarouselItem key={index} className="h-[350px] md:h-[350px]">
            <img
              className="w-full h-full rounded-md object-cover"
              src={item}
              alt="Super Deal"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Slider;

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider({ sliderList }) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {sliderList.map((slider, index) => (
            <CarouselItem key={index}>
              <Image
                src={process.env.NEXT_PUBLIC_BASE_URL + slider.data?.url}
                width={1000}
                height={400}
                alt="slider"
                className="w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;

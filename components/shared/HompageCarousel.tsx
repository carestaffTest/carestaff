"use client";

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { carouselSlide } from "@/constant";
import HomepageCarouselItem from "./HomepageCarouselItem";

const HompageCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[210px] md:h-[420px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-[210px] md:h-[420px] items-center">
          {carouselSlide.map((banner) => {
            return (
              <CarouselItem key={banner.key}>
                <HomepageCarouselItem
                  image={banner.image}
                  contentFirst={banner.contentFirst}
                  contentSecond={banner.contentSecond}
                  route={banner.route}
                  buttonContent={banner.buttonContent}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HompageCarousel;

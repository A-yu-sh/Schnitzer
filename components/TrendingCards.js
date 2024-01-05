"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrendingCards = ({ data }) => {
  const trendingData = JSON.parse(data);
  console.log(trendingData);
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>{trendingData.name}</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TrendingCards;

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Anton } from "next/font/google";

import Image from "next/image";
import { useEffect, useState } from "react";
const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

export default function NewLaunch() {
  return (
    <section className="">
      <h1
        className={`${anton.className} flex justify-center text-4xl md:text-6xl mt-7 md:mt-28`}>
        Newly Launched Products
      </h1>
      <div className="flex justify-center  overflow-hidden space-x-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem>lmao</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

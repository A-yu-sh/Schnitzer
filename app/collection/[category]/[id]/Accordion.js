import Container from "@/app/components/Container";
import React from "react";
import { Mitr } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Accordion_Data } from "../../../components/AccordionData";

const mitr = Mitr({
  weight: "400",
  subsets: ["latin"],
});

const Accordion_Data_Map = Accordion_Data;

const DrawAccordion = () => {
  return (
    <div>
      <Container>
        <div
          className={`${mitr.className} flex justify-center text-5xl font-bold mt-10`}>
          Frequently Asked
        </div>
        <div className="flex justify-center">
          <div className=" ">
            {Accordion_Data_Map.map((e) => {
              return (
                <div key={e.id}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>{e.Question}</AccordionTrigger>
                      <AccordionContent>{e.Answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DrawAccordion;

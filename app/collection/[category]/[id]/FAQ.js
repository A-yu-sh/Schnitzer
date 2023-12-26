import Container from "@/app/components/Container";
import React from "react";
import { Mitr } from "next/font/google";

const mitr = Mitr({
  weight: "400",
  subsets: ["latin"],
});

const Review = [
  {
    id: 1,
    star: 4.7,
    user: "Oliver",
    rev: "Great product. Recommended for everyone. Super quick delivery by boat - received it in 1 day",
  },
  {
    id: 2,
    star: 4.7,
    user: "Harry",
    rev: "Great product. Recommended for everyone. Super quick delivery by boat - received it in 1 day",
  },
  {
    id: 3,
    star: 4.7,
    user: "Victor",
    rev: "Great product. Recommended for everyone. Super quick delivery by boat - received it in 1 day",
  },
  {
    id: 4,
    star: 4.7,
    user: "Gerard",
    rev: "Great product. Recommended for everyone. Super quick delivery by boat - received it in 1 day",
  },
  {
    id: 5,
    star: 4.7,
    user: "Anthony",
    rev: "Great product. Recommended for everyone. Super quick delivery by boat - received it in 1 day",
  },
];

const FAQ = () => {
  return (
    <div>
      <Container>
        <div
          className={`${mitr.className} flex justify-center text-5xl font-bold mt-10`}>
          Verified Reviews
        </div>
        <div className="flex justify-center">
          <div className=" ">
            {Review.map((e) => {
              return <div key={e.id}>{e.rev}</div>;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;

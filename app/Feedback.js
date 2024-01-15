import React from "react";
import Image from "next/image";

const feedback = [
  {
    Name: "Nick Herasimenka",
    Feedback:
      "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗",
    image: "/profile.jpg",
  },
  {
    Name: "S Dzenisenka",
    Feedback:
      "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍",
    image: "/Profile2.jpg",
  },
  {
    Name: " Algistino Lionel",
    Feedback:
      "Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. Recommend... 🥰",
    image: "/Profile3.jpg",
  },
];

const Feedback = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 text-5xl">Customer Say!</div>
      <div className="flex mt-5 justify-center text-center text-sm md:text-lg">
        Customers love our products and we always strive to please them all.
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {feedback.map((e) => {
          return (
            <div key={e.Name} className="border w-[95%] mt-5 rounded-lg p-10">
              <div className="flex justify-center m-1 p-5  gap-5">
                <Image
                  src={e.image}
                  height={50}
                  width={50}
                  alt={e.Name}
                  className="w-14 m-1 p-1 border  rounded-full h-14"
                />
              </div>
              <div className="flex justify-center text-sm text-center  mt-5">
                {e.Feedback}
              </div>
              <div className="flex justify-center mt-2">{e.Name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;

// These are sooo pretty and very comfy.

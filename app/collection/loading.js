import React from "react";
import { Pacifico } from "next/font/google";
import ReactLoading from "react-loading";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic-ext"],
});

const loading = () => {
  return (
    <section
      className={`${pacifico.className} flex justify-center mt-[40vh] transition-all motion-safe:opacity-30 text-6xl`}>
      Schnitzer.
    </section>
  );
};

export default loading;

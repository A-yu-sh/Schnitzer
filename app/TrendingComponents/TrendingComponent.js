import { GET_TRENDING_DATA } from "../api/Operations/route";
import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

export default async function TrendingComponent() {
  const data = await GET_TRENDING_DATA();
  return (
    <section className="">
      <h1
        className={`${anton.className} flex justify-center text-4xl md:text-6xl mt-7 md:mt-28`}>
        Browse Our Trending Products
      </h1>
      <div className="flex overflow-hidden space-x-10">
        {data &&
          data.map((e) => {
            return (
              <div key={e._id} className="flex m-20">
                <Image
                  src={e.image}
                  width={500}
                  height={500}
                  alt={e.name}
                  className="flex"
                />{" "}
                <p>{e.name}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

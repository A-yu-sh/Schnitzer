import { GET_NEW_LAUNCH_DATA } from "../api/Operations/route";
import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

export default async function NewLaunch() {
  const data = await GET_NEW_LAUNCH_DATA();
  return (
    <section className="">
      <h1
        className={`${anton.className} flex justify-center text-4xl md:text-6xl mt-7 md:mt-28`}>
        Newly Launched Products
      </h1>
      <div className="flex justify-center  overflow-hidden space-x-10">
        {data &&
          data
            .filter((e, idx) => {
              return idx > 2;
            })
            .map((e) => {
              return (
                <div
                  key={e._id}
                  className="flex justify-center border-2 border-gray-500 m-20 rounded-lg">
                  <Image
                    src={e.image}
                    width={300}
                    height={300}
                    alt={e.name}
                    className="flex justify-center p-14 hover:scale-125 transition-all ease-in"
                  />{" "}
                  <p>{e.name}</p>
                </div>
              );
            })}
      </div>
    </section>
  );
}

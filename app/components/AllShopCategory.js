import { Anton } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin-ext"],
});

let category = [
  { Category: "Earbuds", image: "/Earbud.jpg", link: "/[category]" },
  { Category: "Speakers", image: "/Speaker.jpg" },
  { Category: "Wireless", image: "/Neckband.webp" },
  { Category: "SmartWatch", image: "/SmartWatch.jpg" },
  { Category: "Neckband", image: "/HeadPhone.jpg" },
  { Category: "SmartRing", image: "/SmartRing.webp" },
  { Category: "Soundbars", image: "/SoundBar.avif" },
];

export async function AllShopCategory() {
  return (
    <div>
      <div
        className={`${anton.className} flex justify-center text-4xl md:text-6xl mt-7 md:mt-16`}>
        Shop by Categories
      </div>
      <div className="grid grid-cols-2 md:grid-cols-7 mt-10 gap-4 ">
        {category.map((e) => {
          return (
            <div key={e.label}>
              <Link
                href={`/collection/${e.link}`}
                as={`/collection/${e.Category}`}>
                <div className="flex justify-center">
                  <Image
                    src={e.image}
                    width={500}
                    height={500}
                    alt={`image of ${e.Category}`}
                    className="rounded-xl  h-[154px] w-[204px] hover:scale-110 transition-all ease-in"
                  />
                </div>
                <p className="flex justify-center mt-5 text-lg">{e.Category}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

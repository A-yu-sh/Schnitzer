import Image from "next/image";
import { Dosis, Anton, Montserrat_Alternates } from "next/font/google";
import Container from "./components/Container";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ShopCategory } from "../components/ShopCategory";
import TwoColumnSection from "./components/TwoColumnSection";
import StaticCards from "./components/StaticCards";

// import TrendingData from "./components/TrendingCards";
// import TrendingComponent from "./TrendingComponents/TrendingComponent";

const dosis = Dosis({
  weight: "500",
  subsets: ["vietnamese"],
});

const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

const montserrat = Montserrat_Alternates({
  weight: "400",
  subsets: ["vietnamese"],
});

export default async function Home() {
  return (
    <main className="">
      <Image
        src="/HeroImg.jpg"
        width={2000}
        height={2000}
        priority={true}
        alt="The Hero Image"
        className="h-[80vh] md:h-[100vh] w-[300vh] mt-2 md:mt-8"
      />
      <div className="relative">
        <h1
          className={`${dosis.className} absolute bottom-16 md:bottom-48 md:ml-12 max-w-[30ch] leading-[3.2rem] md:leading-none md:max-w-[23ch] text-4xl md:text-[4.2rem] font-bold text-gray-200 `}>
          A Statement of <span className="italic">Aesthetic</span> &{" "}
          <span className="italic">Sonic</span> Excellence with 1989's Spirit of
          <span className="underline underline-offset-4 ml-5">Rebellion</span>
        </h1>
      </div>
      <Container>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <h1
                className={`${anton.className} md:mt-40 mt-20 sm:text-3xl text-4xl md:text-6xl  flex justify-center`}>
                UNLOCK THE <span className="text-rose-500 ml-2 mr-2">FULL</span>{" "}
                OF THE <span className="text-rose-500 ml-2 mr-2">AUDIO</span>
              </h1>
              <p
                className={`${montserrat.className} md:mt-20 mt-14 text-sm md:leading-10 md:text-xl leading-7 text-center flex justify-center  `}>
                {" "}
                <Balancer ratio={1}>
                  Our commitment to delivering unparalleled sound quality,
                  ergonomic design, and cutting-edge technology has made us the
                  preferred choice for audiophiles and music enthusiasts
                  worldwide. With Us, you don't just listen to music; you
                  experience it, as every note and beat comes to life in
                  breathtaking clarity.
                </Balancer>
              </p>
              <div className="flex justify-center">
                <Link
                  href="/collection"
                  className="bg-black mt-4 text-white p-5 md:px-32 px-16 rounded-lg ">
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/head.jpg"
                width={500}
                height={500}
                alt="The Hero Image"
                className=" h-[70vh] md:h-[90vh] md:w-[80vh] rounded-xl w-[100vh] mt-7 md:mt-8"
              />
            </div>
          </div>
        </div>{" "}
        <ShopCategory />
        <StaticCards
          Heading=" Schnitzer: Elevate Your Tech Lifestyle "
          Paragraph="Discover a symphony of innovation at Schnitzer, your go-to destination for cutting-edge earphones, stylish smartwatches, and powerful speakers. Unleash the power of sound and stay connected with our premium audio and tech accessories. Elevate your everyday experiences with Schnitzer's curated collection of must-have gadgets"
          Images="/Speaker_Category.jpg"
          Position="left"
        />{" "}
        <div className="hidden md:block">
          <StaticCards
            Heading="Schnitzer: Your Gateway to Premium Tech"
            Paragraph="Explore the future of audio and smart technology with Schnitzer. Immerse yourself in our curated collection of top-tier earphones, cutting-edge smartwatches, and powerful speakers. Elevate your lifestyle with the perfect blend of style and innovation. Schnitzer - where excellence meets technology."
            Images="/Smartwatch_Category.jpg"
            Position="right"
          />
        </div>
        <StaticCards
          Heading=" Sonic Fusion of Tech and Style "
          Paragraph="Discover the perfect harmony of innovation and elegance at Schnitzer. Dive into a world of crystal-clear sound with our top-tier earphones, stay connected with cutting-edge smartwatches, and amplify your space with our sleek speakers. Elevate every moment – Schnitzer, where technology meets sophistication."
          Images="/SonicTech.jpg"
          Position="left"
        />
      </Container>
    </main>
  );
}

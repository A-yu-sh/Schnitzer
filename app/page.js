import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/HeroImg.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="h-[100vh] w-[300vh] mt-2 md:mt-8"
      />
    </main>
  );
}

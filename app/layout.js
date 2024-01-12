import Providers from "@/Redux/Providers";
import Header from "./components/Header";
import NextAuthProvider from "./components/NextAuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schnitzer | Explore The Innovation",
  description:
    "Explore Cutting-Edge Gadgets at Schnitzer Tech Hub | Earphones, Smartwatches, Speakers & More",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      {/* <Head /> */}
      {/* <Head>
        
      </Head> */}
      <body className={inter.className}>
        <Providers>
          <NextAuthProvider>
            <Header />
            {children}
            {/* <Footer /> */}
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}

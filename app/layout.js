import Providers from "@/Redux/Providers";
import Header from "./components/Header";
import NextAuthProvider from "./components/NextAuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <Head />
      <body className={inter.className}>
        <Providers>
          <NextAuthProvider>
            <Header />
            {children}
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}

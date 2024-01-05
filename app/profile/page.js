"use client";
import { useSession, getSession } from "next-auth/react";
import { Dosis } from "next/font/google";
import Container from "../components/Container";

const dosis = Dosis({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
  const { data: session, status } = useSession();
  const name = JSON.parse(localStorage.getItem("user-session"));

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Unauthorized Access</p>;
  }

  return (
    <div>
      <Container>
        <div className="flex justify-center md:justify-start font-bold text-4xl mt-10">
          <h1 className={`${dosis.className}`}>Welcome {name.name}!</h1>
        </div>
      </Container>
    </div>
  );
}
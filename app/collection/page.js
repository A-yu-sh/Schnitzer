import React from "react";
import Container from "../components/Container";

const page = async () => {
  const GETDATA = async () => {
    const data = await fetch(`${process.env.URL}/api/Database`);
    const res = data.json();
    return res;
  };
  const data = await GETDATA();

  return (
    <Container>
      <div>
        <div>Our Collection</div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {data.map((e) => {
            return (
              <div>
                <div>{e.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default page;

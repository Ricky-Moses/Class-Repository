import React from "react";

const Home = ({ desc }) => {
  console.info(desc);
  return (
    <>
      <section id="home">
        <h1>Home Page</h1>
        <p>{desc}</p>
      </section>
    </>
  );
};

export default Home;

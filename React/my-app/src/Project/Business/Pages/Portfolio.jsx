import React from "react";
import PortfolioTop from "./Portfolio/PortfolioTop";
import PortfolioCard from "./Portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <section className="p-3! flex flex-col gap-5">
        <PortfolioTop />
        <PortfolioCard />
      </section>
    </>
  );
};

export default Portfolio;

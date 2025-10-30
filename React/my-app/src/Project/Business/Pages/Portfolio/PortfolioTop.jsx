import React from "react";

const PortfolioTop = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <button className="border-2 py-2! px-4! rounded-3xl text-blue-500">
          Our Portfolio
        </button>
        <h1 className="text-3xl font-bold">Our Recent Works</h1>
        <p className="w-2/6 text-center text-zinc-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
    </>
  );
};

export default PortfolioTop;

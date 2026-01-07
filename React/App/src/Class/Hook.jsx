import React, { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);



  return (
    <>
      <section className="m-5">
        <h1 className="text-2xl">Count: {count}</h1>
        <div className="flex items-center gap-10">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="w-25 h-8 outline bg-slate-500 text-white hover:outline-offset-2 hover:outline-slate-500"
          >
            Increase
          </button>
          <button
            onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
            className="w-25 h-8 outline bg-slate-500 text-white hover:outline-offset-2 hover:outline-slate-500"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="w-25 h-8 outline bg-slate-500 text-white hover:outline-offset-2 hover:outline-slate-500"
          >
            Reset
          </button>
        </div>
      </section>

      {/* <section className="m-5">
        <h1>Time: {time}</h1>
        <div>
          <button
            onClick={() => setIsRun(true)}
            className="w-25 h-8 outline bg-zinc-500 text-white hover:outline-offset-2 hover:outline-zinc-500"
          >
            Start
          </button>
        </div>
      </section> */}
    </>
  );
};

export default Hook;

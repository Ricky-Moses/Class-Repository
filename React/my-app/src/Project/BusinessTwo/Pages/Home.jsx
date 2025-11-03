import React from "react";
import { CiPlay1 } from "react-icons/ci";
import HomeImg from "../../../asset/home.jpg";

const Home = () => {
  return (
    <>
      <section className="bg-blue-600 h-[93vh] grid place-items-center">
        <article className="w-10/12 ">
          <figure className="flex items-center gap-3">
            <figcaption className="text-white flex flex-col gap-4 ">
              <h1 className="text-5xl font-bold">
                Corporate & Business Site Template by Ayro UI.
              </h1>
              <p>
                We are a digital agency that helps brands to achieve their
                business outcomes. We see technology as a tool to create amazing
                things.
              </p>
              <div className="flex items-center gap-5">
                <button className="border w-50 h-10 rounded-2xl bg-white font-bold text-blue-600 hover:shadow-2xl">
                  GET STARTED
                </button>
                <button className="w-10 h-10 grid place-items-center rounded-full border">
                  <CiPlay1 />
                </button>
              </div>
            </figcaption>
            <div className="w-3/5">
              <img src={HomeImg} alt="" />
            </div>
          </figure>
        </article>
      </section>
    </>
  );
};

export default Home;

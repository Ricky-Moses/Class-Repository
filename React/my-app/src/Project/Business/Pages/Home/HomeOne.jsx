import React from "react";
import { CiPlay1 } from "react-icons/ci";
import HomeImg from "../../../../asset/home.jpg";

const HomeOne = () => {
  return (
    <>
      <section id="home" className="grid place-items-center p-5! h-[88vh]">
        <figure className="w-5/6 flex items-center">
          <figcaption>
            <h1 className="">
              Corporate & Business Site <br /> Template By Ayro UI
            </h1>
            <p className="">
              We are a digital agency that helps brands to achieve their
              business outcomes. We see technology as a tool to create amazing
              things.
            </p>
            <div className="">
              <button>Get Started</button>
              <button>
                <CiPlay1 />
              </button>
              <label htmlFor="">Watch Intro</label>
            </div>
          </figcaption>
          <div className="w-5/6">
            <img src={HomeImg} alt="" />
          </div>
        </figure>
      </section>
    </>
  );
};

export default HomeOne;

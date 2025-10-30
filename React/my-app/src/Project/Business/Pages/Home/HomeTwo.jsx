import React from "react";
import HomeImg from "../../../../asset/home.jpg";

const HomeTwo = () => {
  return (
    <>
      <section id="homeTwo" className="grid place-items-center">
        <figure className="w-5/6 flex items-center gap-3">
          <div className="w-350">
            <img className="" src={HomeImg} />
          </div>
          <figcaption className="flex flex-col gap-3">
            <p className="text-2xl">—{/* alt + 0151 */}OUR STORY</p>
            <h1 className="text-4xl">
              Our team comes with the experience and knowledge
            </h1>
            <div className="bg-zinc-200 p-3! grid grid-cols-3 gap-4">
              <button className="py-2! rounded-2xl bg-blue-500 text-white font-bold ">
                Who we are
              </button>
              <button className="py-2! rounded-2xl bg-zinc-300 font-bold hover:bg-blue-500 hover:text-white">
                Our Vision
              </button>
              <button className="py-2! rounded-2xl bg-zinc-300 font-bold">
                Our History
              </button>
            </div>
            <p className="text-zinc-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, look like readable English.
            </p>
            <p className="text-zinc-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have in some form, by injected humour.
            </p>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default HomeTwo;

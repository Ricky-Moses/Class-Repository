import React from "react";

const arrOfObj = [
  {
    name: "Flower Image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus vitae libero molestias aliquam hic rem at et! Consequuntur, perspiciatis voluptates.",
    img: "https://picsum.photos/500/300?random=0",
  },
  {
    name: "Game Image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus vitae libero molestias aliquam hic rem at et! Consequuntur, perspiciatis voluptates.",
    img: "https://picsum.photos/500/300?random=1",
  },
  {
    name: "Dress Image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus vitae libero molestias aliquam hic rem at et! Consequuntur, perspiciatis voluptates.",
    img: "https://picsum.photos/500/300?random=2",
  },
  {
    name: "Steve Rogers Image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus vitae libero molestias aliquam hic rem at et! Consequuntur, perspiciatis voluptates.",
    img: "https://picsum.photos/500/300?random=3",
  },
  {
    name: "Tony Stark Image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus vitae libero molestias aliquam hic rem at et! Consequuntur, perspiciatis voluptates.",
    img: "https://picsum.photos/500/300?random=4",
  },
  {
    name: "Natasha Image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus vitae libero molestias aliquam hic rem at et! Consequuntur, perspiciatis voluptates.",
    img: "https://picsum.photos/500/300?random=5",
  },
];

const CardOne = () => {
  return (
    <>
      <section className="grid grid-cols-3 p-5 gap-5">
        {arrOfObj.map((item, idx) => (
          <figure key={idx} className="flex flex-col gap-4 p-3 shadow-2xl rounded-2xl">
            <div>
              <img className="rounded" src={item.img} />
            </div>
            <figcaption className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p>{item.desc}</p>
              <button className="outline h-8 rounded hover:bg-black hover:text-white transition-colors duration-500">
                Learn More
              </button>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
};

export default CardOne;

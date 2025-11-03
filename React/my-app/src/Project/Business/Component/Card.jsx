import React from "react";

const Card = ({ category }) => {
  return (
    <>
      <section className="grid grid-cols-3 p-3 gap-3">
        {category.length > 0 &&
          category.map((item) => (
            <figure className="">
              <div>
                <img src={item.img} alt="" />
              </div>
              <figcaption>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          ))}
      </section>
    </>
  );
};

export default Card;

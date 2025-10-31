import React from "react";

const Card = ({ category, data }) => {
  
  return (
    <>
      <section className="grid grid-cols-3">
        <figure className="">
          <div>
            <img src="https://picsum.photos/500/300?random=0" alt="" />
          </div>
          <figcaption>
            <h1>Graphic Design</h1>
            <p>
              Short description for the ones who look for something new.
              Awesome!
            </p>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default Card;

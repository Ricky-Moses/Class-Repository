import React from "react";
import { useLocation } from "react-router-dom";
import SimpleSlider from "../Component/Slick";

const Product = () => {
  const { state } = useLocation();
//   console.info(state);
  return <>
    <section className="flex justify-center p-5">
        <figure className="border w-[500px]">
            <div>
                {/* <img src={state.images[0].url} alt="" /> */}
                <SimpleSlider images={state?.images} />
            </div>
        </figure>
    </section>
  </>;
};

export default Product;

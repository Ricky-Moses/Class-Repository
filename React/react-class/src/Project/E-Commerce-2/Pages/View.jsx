import React from "react";
import { useLocation } from "react-router-dom";

const View = () => {
  const { state } = useLocation();
  return (
    <>
      <section className="flex justify-center">
        <figure className="w-[450px] border">
          <div>
            <img className="" src="https://picsum.photos/500/300" />
          </div>
        </figure>
      </section>
    </>
  );
};

export default View;

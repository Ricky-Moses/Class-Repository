import React, { useState } from "react";
import Img_1 from "../assets/Nature-1.jpg";
import Img_2 from "../assets/Nature-2.jpg";
import Img_3 from "../assets/Nature-3.jpg";
import Img_4 from "../assets/Nature-4.jpg";
import Img_5 from "../assets/Nature-5.jpg";
import Img_6 from "../assets/Nature-6.jpg";
import Img_7 from "../assets/Nature-7.jpg";
import Img_8 from "../assets/Nature-8.jpg";
import Img_9 from "../assets/Nature-9.jpg";

const ClickImg = () => {
  const [img, setImg] = useState(0);
  const arrOfImg = [
    Img_1,
    Img_2,
    Img_3,
    Img_4,
    Img_5,
    Img_6,
    Img_7,
    Img_8,
    Img_9,
  ];

  console.info(arrOfImg.length)

  const handleChange = () => {
    setImg((prev) => ((prev + 1) % arrOfImg.length));
    console.info(img)
  };
  return (
    <>
      <figure className="w-[500px]">
        <img src={arrOfImg[img]} alt="" />
      </figure>

      <button onClick={handleChange}>Click</button>
    </>
  );
};

export default ClickImg;

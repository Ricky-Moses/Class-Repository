import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ imgs }) {
  console.info(imgs);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <Slider {...settings}>
      {imgs && imgs.map((item) => <img src={item.url} alt="" />)}
    </Slider>
  );
}

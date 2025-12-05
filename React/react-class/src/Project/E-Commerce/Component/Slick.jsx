import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({images}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000
  };

  console.info(images)
  return (
    <Slider {...settings}>
      {images.map((pic) => (
        <img src={pic.url} alt="" />
      ))}
    </Slider>
  );
}
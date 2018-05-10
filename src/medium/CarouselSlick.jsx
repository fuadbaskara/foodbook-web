import React from "react";
import Slider from "react-slick";

var settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  variableWidth: true
};

const CarouselSlick = ({ photos }) => {
  <Slider {...settings} className="slidercaro mb-4">
    {photos.map((photo, index) => {
      return (
        <div>
          <img className="carousel-size" src={photo} alt="Caroosel 1" />
        </div>
      );
    })}
  </Slider>;
};

export default CarouselSlick;

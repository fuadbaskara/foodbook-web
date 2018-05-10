import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarouselSlick extends Component {
  constructor(props) {
    super(props);
    this.photos = this.props.photos;
    this.name = this.props.name;
  }
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      centerMode: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container carousel-width">
        <div className="mt-4">
          <h2>{this.name}</h2>
        </div>
        <Slider {...settings}>
          <div className="carousel-align">
            <img
              className="carousel-size"
              src={this.photos[0]}
              alt="Caroosel 1"
            />
          </div>
          <div className="carousel-align">
            <img
              className="carousel-size"
              src={this.photos[1]}
              alt="Caroosel 1"
            />
          </div>
          <div className="carousel-align">
            <img
              className="carousel-size"
              src={this.photos[2]}
              alt="Caroosel 1"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

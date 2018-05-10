import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "slider variable-width",
  centerPadding: "60px",
  centerMode: true,
  autoplay: true,
  variableWidth: true,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const CarouselSlick = ({ photos }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Slider {...settings} className="slidercaro mb-4">
            {photos.map((photo, index) => {
              return (
                <div key={index}>
                  <img src={photo} alt="Carousel" className="image-height" />
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselSlick;

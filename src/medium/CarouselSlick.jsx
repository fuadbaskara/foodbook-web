import React from "react";

const CarouselSlick = ({ photos }) => (
  <div>
    <div className="container d-flex justify-content-center image-container p-10">
      <div>
        <img className="image-detail p-2" src={photos[0]} />
      </div>
      <div>
        <img className="image-detail p-2" src={photos[1]} />
      </div>
      <div>
        <img className="image-detail p-2" src={photos[2]} />
      </div>
    </div>
  </div>
);

export default CarouselSlick;

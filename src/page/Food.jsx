import React, { Component } from "react";
import Carousels from "../medium/Carousels.jsx";
import DetailTab from "../medium/DetailTab.jsx";
import Reviews from "../medium/Reviews.jsx";

class Food extends Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="carousels">
            <Carousels />
          </div>
          <div>
            <DetailTab className="detailTab" />
            <Reviews />
          </div>
        </div>
      </div>
    );
  }
}

export default Food;

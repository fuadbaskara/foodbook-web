import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Carousels from "../medium/Carousels.jsx";
import DetailTab from "../medium/DetailTab.jsx";

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
          </div>
        </div>
      </div>
    );
  }
}

export default Food;

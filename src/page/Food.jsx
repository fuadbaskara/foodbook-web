import React, { Component } from "react";
import Carousels from "../medium/Carousels.jsx";
import DetailTab from "../medium/DetailTab.jsx";
import Reviews from "../medium/Reviews.jsx";

class Food extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  // componentWillMount() {
  //   console.log(this.id);
  // }

  render() {
    return (
      <div className="margin-top-100">
        <div>
          <div className="carousels">
            <Carousels />
          </div>
          <div>
            <DetailTab className="detailTab" food_id={this.id} />
            <Reviews />
          </div>
        </div>
      </div>
    );
  }
}

export default Food;

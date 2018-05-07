import React, { Component } from "react";
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
      <div>
        <div>
          <DetailTab className="detailTab" food_id={this.id} />
          <Reviews />
        </div>
      </div>
    );
  }
}

export default Food;

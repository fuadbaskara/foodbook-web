import React, { Component } from "react";
import DetailTab from "../medium/DetailTab.jsx";

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
        <br />
        <br />
        <br />
        <br />
        <div>
          <DetailTab
            className="detailTab"
            food_id={this.id}
            match={this.props.match.url}
          />
        </div>
      </div>
    );
  }
}

export default Food;

import React, { Component } from "react";
import Overview from "./Overview.jsx";
import Locations from "./Location.jsx";
import Reviews from "./Reviews.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Submenu extends Component {
  constructor(props) {
    super(props);
    // this.subMenu = this.props.match.params.subMenu;
    // this.data = this.props.data;
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.subMenu === "overview" && (
          <Overview
            name={this.data.name}
            description={this.data.overview}
            rating={this.data.rating}
          />
        )}
        {this.subMenu === "location" && (
          <Locations
            city={this.data.city}
            street={this.data.street}
            latitude={this.data.latitude}
            longitude={this.data.longitude}
          />
        )}
        {this.subMenu === "reviews" && (
          <Reviews userid={this.data._userid} rating={this.data.rating} />
        )}
      </div>
    );
  }
}

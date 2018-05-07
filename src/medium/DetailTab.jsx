import React from "react";
import axios from "axios";
import Carousels from "../medium/Carousels.jsx";
const API_URL =
  process.env.REACT_APP_API_URL || "https://foodbook-api.herokuapp.com";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.food_id;
    this.state = {
      overviewTab: true,
      menuTab: false,
      locationTab: false,
      reviewTab: false,
      reviewContent: false,
      detailfood: []
    };
    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    await axios.get(`${API_URL}/foods/${this.id}`).then(res => {
      let responseData = res.data.data;
      let data = {
        ...responseData,
        city: responseData.address.city,
        street: responseData.address.street,
        photos: responseData.photos[0]
      };
      this.setState({ detailfood: data });
    });
  }

  async componentWillMount() {
    await this.getData();
    console.log(this.state.detailfood);
    console.log(this.state.detailfood.photos);
    console.log(process.env.REACT_APP_API_URL);
  }

  toggleOverview() {
    this.setState(() => {
      return {
        overviewTab: true,
        menuTab: false,
        locationTab: false,
        reviewTab: false
      };
    });
  }

  toggleMenu() {
    this.setState(() => {
      return {
        menuTab: true,
        overviewTab: false,
        locationTab: false,
        reviewTab: false
      };
    });
  }

  toggleLocation() {
    this.setState(() => {
      return {
        locationTab: true,
        menuTab: false,
        overviewTab: false,
        reviewTab: false
      };
    });
  }

  toggleReview() {
    this.setState(() => {
      return {
        reviewTab: true,
        reviewContent: true,
        menuTab: false,
        locationTab: false,
        overviewTab: false
      };
    });
  }

  render() {
    let name = this.state.detailfood.name || "aa";
    return (
      <div>
        <div className="carousels">
          <Carousels photos={name} a="a" />
        </div>
        <br />
        {this.state.detailfood.name} || {this.state.detailfood.overview} ||{" "}
        {this.state.detailfood.city} || {this.state.detailfood.street} ||{" "}
        {this.state.detailfood.price} || {this.state.detailfood.photos}
        <div className="container">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <a onClick={this.toggleOverview}>
                {this.state.overviewTab === true ? (
                  <a className="nav-link active">Overview</a>
                ) : (
                  <a className="nav-link">Overview</a>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleMenu}>
                {this.state.menuTab === true ? (
                  <a className="nav-link active">Menu</a>
                ) : (
                  <a className="nav-link">Menu</a>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleLocation}>
                {this.state.locationTab === true ? (
                  <a className="nav-link active">Location</a>
                ) : (
                  <a className="nav-link">Location</a>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleReview}>
                {this.state.reviewTab === true ? (
                  <a className="nav-link active">Reviews</a>
                ) : (
                  <a className="nav-link">Reviews</a>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

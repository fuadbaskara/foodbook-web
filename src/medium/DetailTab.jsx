import React from "react";
import axios from "axios";
import Carousels from "./Carousels.jsx";
import Submenu from "./Submenu.jsx";
import Overview from "./Overview.jsx";
import Locations from "./Location.jsx";
import Reviews from "./Reviews.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    this.match = this.props.match;
    console.log(this.match);
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
        photos: responseData.photos[0],
        latitude: responseData.coordinate.latitude,
        longitude: responseData.coordinate.longitude,
        comment: responseData.reviews[0].comment,
        rating: responseData.reviews[0].rating,
        _userid: responseData.reviews[0]._id
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
    return (
      <div>
        <div className="carousels">
          <Carousels photos={this.state.detailfood.photos} a="a" />
        </div>
        <br />
        <div>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <Link to={`${this.match}/overview`}>
                <a onClick={this.toggleOverview}>
                  {this.state.overviewTab === true ? (
                    <a className="nav-link active">Overview</a>
                  ) : (
                    <a className="nav-link">Overview</a>
                  )}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`${this.match}/location`}>
                <a onClick={this.toggleLocation}>
                  {this.state.locationTab === true ? (
                    <a className="nav-link active">Location</a>
                  ) : (
                    <a className="nav-link">Location</a>
                  )}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`${this.match}/reviews`}>
                <a onClick={this.toggleReview}>
                  {this.state.reviewTab === true ? (
                    <a className="nav-link active">Reviews</a>
                  ) : (
                    <a className="nav-link">Reviews</a>
                  )}
                </a>
              </Link>
            </li>
          </ul>

          <Route
            path={`${this.match.path}/:subMenu`}
            render={props => (
              <Submenu {...props} data={this.state.detailfood} />
            )}
          />
        </div>
        <div>
          <Overview
            name={this.state.detailfood.name}
            rating={this.state.detailfood.rating}
          />
          <Locations
            city={this.state.detailfood.city}
            street={this.state.detailfood.street}
            latitude={this.state.detailfood.latitude}
            longitude={this.state.detailfood.longitude}
          />
          <Reviews
            userid={this.state.detailfood._userid}
            rating={this.state.detailfood.rating}
          />
        </div>
      </div>
    );
  }
}

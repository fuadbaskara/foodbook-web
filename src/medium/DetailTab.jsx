import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import CarouselSlick from "./CarouselSlick.jsx";
import Overview from "./Overview.jsx";
import Locations from "./Location.jsx";
import Reviews from "./Reviews.jsx";

const API_URL = "http://localhost:3030";

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
      detailFood: [],
      allReview: [],
      comment: "",
      _account: ""
    };
    this.match = this.props.match;
    this.toggleOverview = this.toggleOverview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
    this.getData = this.getData.bind(this);
    this.postReview = this.postReview.bind(this);

    this.handleChangeComment = this.handleChangeComment.bind(this);
  }

  async getData() {
    await axios.get(`${API_URL}/foods/${this.id}`).then(res => {
      let responseData = res.data.data;
      let data = {
        ...responseData,
        city: responseData.address.city,
        street: responseData.address.street,
        detailLocation: responseData.address.detailLocation,
        photos: responseData.photos[0],
        latitude: responseData.coordinate.latitude,
        longitude: responseData.coordinate.longitude
      };

      this.setState({ detailFood: data, allReview: data.reviews });
    });
  }

  async componentWillMount() {
    await this.getData();
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

  handleChangeComment(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputComment: value };
    });
  }

  postReview() {
    const id = this.state.detailFood.id;
    console.log(this.state.detailFood);
    axios({
      url: `${API_URL}/foods/add_review/${id}`,
      method: "PUT",
      headers: {
        Authorization: "Bearer " + window.localStorage.token
      },
      data: {
        comment: this.props.inputComment,
        _account: this.state.detailFood._account
      }
    }).then(res => {
      console.log(res);
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
      <div id="detail-tab" className="detail-tab">
        <div className="carousels">
          {this.state.detailFood.photos && (
            <CarouselSlick photos={this.state.detailFood.photos} />
          )}
        </div>
        <br />
        <div id="detail-tabs" className="detail-tabs">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <Link onClick={this.toggleOverview} to={`${this.match}/overview`}>
                {this.state.overviewTab === true ? (
                  <p className="nav-link active">Overview</p>
                ) : (
                  <p className="nav-link">Overview</p>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.toggleLocation} to={`${this.match}/location`}>
                {this.state.locationTab === true ? (
                  <p className="nav-link active">Location</p>
                ) : (
                  <p className="nav-link">Location</p>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.toggleReview} to={`${this.match}/reviews`}>
                {this.state.reviewTab === true ? (
                  <p className="nav-link active">Reviews</p>
                ) : (
                  <p className="nav-link">Reviews</p>
                )}
              </Link>
            </li>
          </ul>
          <Route
            exact
            path={`${this.match}/`}
            render={() => (
              <Overview
                id={this.id}
                name={this.state.detailFood.name}
                overview={this.state.detailFood.overview}
                minPrice={this.state.detailFood.minPrice}
                maxPrice={this.state.detailFood.maxPrice}
              />
            )}
          />
          <Route
            path={`${this.match}/overview`}
            render={() => (
              <Overview
                id={this.id}
                name={this.state.detailFood.name}
                overview={this.state.detailFood.overview}
                minPrice={this.state.detailFood.minPrice}
                maxPrice={this.state.detailFood.maxPrice}
              />
            )}
          />
          <Route
            path={`${this.match}/location`}
            render={() => (
              <Locations
                city={this.state.detailFood.city}
                street={this.state.detailFood.street}
                detailLocation={this.state.detailFood.detailLocation}
              />
            )}
          />
          <Route
            path={`${this.match}/reviews`}
            component={() => (
              <Reviews
                postComment={this.handleChangeComment}
                postReview={this.postReview}
                userid={this.state.detailFood._userid}
                rating={this.state.detailFood.rating}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

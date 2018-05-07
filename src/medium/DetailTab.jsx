import React from "react";
import axios from "axios";
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
      detailfood: {}
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
        ...res.data.data,
        city: responseData.address.city,
        street: responseData.address.street
      };
      this.setState({ detailfood: data });
    });
  }

  async componentWillMount() {
    await this.getData();
    console.log(this.state.detailfood);
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
        <br />
        {this.state.detailfood.name} || {this.state.detailfood.overview} ||{" "}
        {this.state.detailfood.city} || {this.state.detailfood.street} ||{" "}
        {this.state.detailfood.price}
        <div className="container">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <a onClick={this.toggleOverview}>
                {this.state.overviewTab === true ? (
                  <p className="nav-link active">Overview</p>
                ) : (
                  <p className="nav-link">Overview</p>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleMenu}>
                {this.state.menuTab === true ? (
                  <p className="nav-link active">Menu</p>
                ) : (
                  <p className="nav-link">Menu</p>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleLocation}>
                {this.state.locationTab === true ? (
                  <p className="nav-link active">Location</p>
                ) : (
                  <p className="nav-link">Location</p>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.toggleReview}>
                {this.state.reviewTab === true ? (
                  <p className="nav-link active">Reviews</p>
                ) : (
                  <p className="nav-link">Reviews</p>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

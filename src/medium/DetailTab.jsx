import React from "react";
import axios from "axios";
const API_URL = "https://foodbook-api.herokuapp.com";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    // this.id = this.props.match.params.id;
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
  }

  // async getData() {
  //   let detailfood = "";
  //   await axios.get(`${API_URL}/foods/${this.id}`).then(res => {
  //     detailfood = res.data;
  //   });
  //   await this.setState({ detailfood: detailfood });
  //
  //   console.log(this.state.detailfood);
  // }

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

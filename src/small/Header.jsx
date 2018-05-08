import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

const StyleImage = {
  width: "22%",
  display: "flex",
  justifyContent: "left",
  marginTop: "-45px"
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchFoods: ""
    };
    this.handleChangeSearchFoods = this.handleChangeSearchFoods.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChangeSearchFoods(event) {
    let value = event.target.value;
    this.setState(() => {
      return { searchFoods: value };
    });
  }

  async submitForm(event) {
    event.preventDefault();
    await axios
      .get(`${API_URL}/foods/search?name=sate`)
      .then(res => {
        return res.data;
      })
      .then(res => {
        this.setState({ foods: res });
        console.log(this.state.foods);
      });
  }

  render() {
    console.log("state", this.state);
    return (
      <div className="App-header fixed-top">
        <div
          className="display-inline margin-right-30"
          onSubmit={this.submitForm}
        />
        <div>
          <Link to="/">
            <img
              src={require(`../image/foodbook-logo.png`)}
              alt="Foodbook Logo"
              style={StyleImage}
            />
          </Link>
        </div>
        {window.localStorage.token ? (
          <div>
            <Link className="border-sign textNavBar text-right mx-2" to="/">
              Home
            </Link>
            <Link
              className="border-sign textNavBar text-right mx-2"
              to="/addfood"
            >
              Add Food
            </Link>
            <Link
              className="border-sign textNavBar text-right mx-2"
              to="/profile"
            >
              Profile
            </Link>
          </div>
        ) : (
          <div>
            <Link className="border-sign textNavBar text-right mx-2" to="/">
              Home
            </Link>
            <Link
              className="border-sign textNavBar text-right mx-2"
              to="/login"
            >
              Add Food
            </Link>
            <Link className="menu-sign textNavBar text-right mx-2" to="/login">
              Sign In
            </Link>
            <Link className="menu-sign textNavBar text-right mx-2" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Header;

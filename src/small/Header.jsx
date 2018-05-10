import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "reactstrap";

const StyleImage = {
  width: "300px",
  display: "flex",
  justifyContent: "left"
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  componentWillMount = () => {
    if (localStorage.token) this.setState({ login: true });
  };

  handleLogout = async event => {
    localStorage.clear();
    this.props.history.push("/signin");
    alert("You're logged out");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="fixed-top App-header">
        <div className="logo">
          <Link to="/">
            <div>
              <img
                src={require(`../image/foodbook-logo.png`)}
                alt="Foodbook Logo"
                style={StyleImage}
              />
            </div>
          </Link>
        </div>
        {window.localStorage.token ? (
          <div>
            <Link to="/" className="menu-sign mx-2">
              Home
            </Link>
            <Link to="/addfood" className="menu-sign mx-2">
              Add Food
            </Link>
            <Link to="/profile" className="menu-sign mx-2">
              Profile
            </Link>
            <Link
              to="/signin"
              className="menu-sign mx-2"
              onClick={this.handleLogout}
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="d-flex justify-content-end">
            <Link to="/" className="menu-sign mx-2">
              Home
            </Link>
            <Link to="/signin" className="menu-sign mx-2">
              Add Food
            </Link>
            <Link to="/signin" className="menu-sign mx-2">
              Sign In
            </Link>
            <Link to="/signup" className="menu-sign mx-2">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Header);

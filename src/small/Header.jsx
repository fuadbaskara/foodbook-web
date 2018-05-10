import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Button } from "reactstrap";

const StyleImage = {
  width: "22%",
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
      <div className="App-header fixed-top">
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
            <Button
              className="menu-sign textNavBar text-right mx-2"
              to="/signin"
              onClick={this.handleLogout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Link className="border-sign textNavBar text-right mx-2" to="/">
              Home
            </Link>
            <Link
              className="border-sign textNavBar text-right mx-2"
              to="/signin"
            >
              Add Food
            </Link>
            <Button
              className="menu-sign textNavBar text-right mx-2"
              to="/signin"
            >
              Sign In
            </Button>
            <Button
              className="menu-sign textNavBar text-right mx-2"
              to="/signup"
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Header);

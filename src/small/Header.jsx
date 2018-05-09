import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

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
            <Link
              className="menu-sign textNavBar text-right mx-2"
              to="/login"
              onClick={this.handleLogout}
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="border-sign textNavBar text-right mx-2" to="/">
              Home
            </Link>
            <Link className="menu-sign textNavBar text-right mx-2" to="/login">
              Login
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

export default withRouter(Header);

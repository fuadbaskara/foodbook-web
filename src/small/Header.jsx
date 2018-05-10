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
            <Link to="/">
              <Button className="menu-sign mx-2">Home</Button>
            </Link>
            <Link to="/addfood">
              <Button className="menu-sign mx-2">Add Food</Button>
            </Link>
            <Link to="/profile">
              <Button className="menu-sign mx-2">Profile</Button>
            </Link>
            <Link to="/signin" onClick={this.handleLogout}>
              <Button className="menu-sign mx-2">Log Out</Button>
            </Link>
          </div>
        ) : (
          <div className="d-flex justify-content-end">
            <Link to="/">
              <Button className="menu-sign mx-2">Home</Button>
            </Link>
            <Link to="/signin">
              <Button className="menu-sign mx-2">Add Food</Button>
            </Link>
            <Link to="/signin">
              <Button className="menu-sign mx-2">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="menu-sign mx-2">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Header);

import React from "react";
import { Link } from "react-router-dom";

const StyleImage = {
  width: "22%",
  display: "flex",
  justifyContent: "left",
  marginTop: "-45px"
};

const Header = () => {
  return (
    <div className="App-header fixed-top">
      <div className="display-inline margin-right-30">
        <input type="text" className="inputText border border-danger" />
        <button className="button-border-sign textNavBar">Search</button>
      </div>
      <Link className="textNavBar text-right mx-2" to="/">
        Home
      </Link>
      <Link className="textNavBar text-right mx-2" to="/profile">
        Profile
      </Link>
      <Link className="textNavBar text-right mx-2" to="/addfood">
        Add Food
      </Link>
      <Link className="border-sign textNavBar text-right mx-2" to="/login">
        Sign In
      </Link>
      <Link className="border-sign textNavBar text-right mx-2" to="/signup">
        Sign Up
      </Link>
      <div>
        <Link to="/">
          <img
            src={require(`../image/foodbook-logo.png`)}
            alt="Foodbook Logo"
            style={StyleImage}
          />
        </Link>
      </div>
  );
};

export default Header;

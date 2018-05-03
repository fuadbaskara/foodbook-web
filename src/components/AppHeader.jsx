import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="App-header fixed-top">
      <div className="display-inline margin-right-90">
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
    </div>
  );
};

export default AppHeader;

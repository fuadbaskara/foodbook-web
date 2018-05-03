import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./page/home";
import Login from "./page/login";
import Profile from "./page/profile";
import Signup from "./page/signup";
import detailProduk from "./page/detailproduk";
import addFood from "./page/addfood";

const BasicExample = () => (
  <Router>
    <div>
      <div className="App-header fixed-top">
        <div className="display-inline margin-right-90">
          <input type="text" className="inputText border border-danger" />
          <button className="button-border-sign textNavBar">Search</button>
        </div>
        <Link className="textNavBar text-right mx-2" to="/">
          Home
        </Link>
        {/*<Link className="textNavBar text-right mx-2" to="/profile">
              Profile
            </Link>
            <Link className="textNavBar text-right mx-2" to="/detailProduk">
              Detail Product
            </Link>*/}
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

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/detailProduk" component={detailProduk} />
      <Route path="/profile" component={Profile} />
      <Route path="/addfood" component={addFood} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
);

export default BasicExample;

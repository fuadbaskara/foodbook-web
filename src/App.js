import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppHeader from "./components/AppHeader";

import Home from "./page/home";
import Login from "./page/login";
import Profile from "./page/profile";
import Signup from "./page/signup";
import detailProduk from "./page/detailproduk";
import addFood from "./page/addfood";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <AppHeader />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/detailProduk" component={detailProduk} />
      <Route path="/profile" component={Profile} />
      <Route path="/addfood" component={addFood} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader";

import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Signup from "./page/Signup";
import Food from "./page/Food";
import AddFood from "./page/AddFood";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <AppHeader />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/food" component={Food} />
      <Route path="/profile" component={Profile} />
      <Route path="/add" component={AddFood} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
);

export default App;

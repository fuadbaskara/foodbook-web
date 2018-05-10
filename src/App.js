import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import Template from "./page/Template";
import Home from "./page/Home";
import Signin from "./page/Signin";
import Profile from "./page/Profile";
import Signup from "./page/Signup";
import Food from "./page/Food";
import AddFood from "./page/AddFood";
import Tech from "./page/Tech";
import Team from "./page/Team";

import "./App.css";

const App = () => (
  <Router>
    <ScrollToTop>
      <Template>
        <Route exact path="/" component={Home} />
        <Route path="/food/:id" component={Food} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/addfood" component={AddFood} />
        <Route path="/profile" component={Profile} />
        <Route path="/tech" component={Tech} />
        <Route path="/team" component={Team} />
      </Template>
    </ScrollToTop>
  </Router>
);

export default App;

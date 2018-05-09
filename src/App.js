import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Template from "./page/Template";
import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Signup from "./page/Signup";
import Food from "./page/Food";
import AddFood from "./page/AddFood";
import Tech from "./small/tech";
import Team from "./small/team";

import "./App.css";

const App = () => (
  <Router>
    <Template>
      <Route exact path="/" component={Home} />
      <Route path="/food/:id" component={Food} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/addfood" component={AddFood} />
      <Route path="/profile" component={Profile} />
      <Route path="/tech" component={Tech} />
      <Route path="/team" component={Team} />
    </Template>
  </Router>
);

export default App;

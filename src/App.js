import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  InputGroup,
  Input,
  Button
} from "reactstrap";
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
      <header>
        <Row className="App-header navbar fixed-top d-flex justify-content-end">
          <Link className="textNavBar text-right mx-2" to="/">
            Home
          </Link>
          <Link className="textNavBar text-right mx-2" to="/login">
            Login
          </Link>
          <Link className="textNavBar text-right mx-2" to="/profile">
            Profile
          </Link>
          <Link className="textNavBar text-right mx-2" to="/detailProduk">
            Detail Product
          </Link>
          <Link className="textNavBar text-right mx-2" to="/addfood">
            Add Food
          </Link>
          <Link className="textNavBar text-right mx-2" to="/signup">
            Sign Up
          </Link>
        </Row>
        <InputGroup className="inputTextProduk">
          <input type="text" className="inputText border border-danger" />
          <Button className="buttonText" outline color="danger">
            Search
          </Button>
        </InputGroup>
      </header>

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/detailProduk" component={detailProduk} />
      <Route path="/profile" component={Profile} />
      <Route path="/addfood" component={addFood} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic </h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;

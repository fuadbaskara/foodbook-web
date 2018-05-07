import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import axios from "axios";
// import { Link } from "react-router-dom";
import Food from "./Food";

const API_URL = "https://foodbook-api.herokuapp.com";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      foods: []
    };
    this.getIndex = this.getIndex.bind(this);
  }

  getIndex(index) {
    console.log(index);
    this.setState(() => {
      return {
        index: index
      };
    });
  }

  async getData() {
    await axios
      .get(`${API_URL}/foods`)
      .then(res => {
        return res.data;
      })
      .then(res => {
        this.setState({ foods: res });
      });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Row className="homeProduct">
        {this.state.foods &&
          this.state.foods.map((food, index) => (
            <Col sm="4" key={index}>
              <CardImg
                width="25%"
                height="50%"
                src={food.photos[0]}
                alt="Food Image"
              />
              <CardBody>
                <CardTitle>{food.name}</CardTitle>
                <CardText>{food.overview}</CardText>
                <Link to={`/food/${food.id}`}>
                  <Button className="width-full">Details</Button>
                </Link>
              </CardBody>
            </Col>
          ))}
      </Row>
    );
  }
}

export default Home;

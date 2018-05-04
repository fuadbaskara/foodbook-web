import React, { Component } from "react";
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
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      foods: []
    };
  }

  async getData() {
    let foods = "";
    await axios.get(`${API_URL}/foods`).then(res => {
      foods = res.data;
    });
    await this.setState({ foods: foods });

    console.log(this.state.foods);
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="margin-top-100">
        <Row className="homeProduct">
          {this.state.foods.map((food, index) => (
            <Col sm="4" key={index}>
              <CardImg
                width="25%"
                height="50%"
                src={food.photos[0]}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{food.name}</CardTitle>
                <CardText>{food.overview}</CardText>
                <Link to="/food">
                  <Button className="width-full">Details</Button>
                </Link>
              </CardBody>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Home;

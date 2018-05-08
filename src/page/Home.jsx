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

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
      searchFoods: ""
    };
    this.getIndex = this.getIndex.bind(this);
    this.handleChangeSearchFoods = this.handleChangeSearchFoods.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
        this.setState({ foods: res.data });
        console.log(this.state.foods);
      });
  }

  componentWillMount() {
    this.getData();
  }

  handleChangeSearchFoods(event) {
    let value = event.target.value;
    this.setState(() => {
      return { searchFoods: value };
    });
  }

  async submitForm(event) {
    event.preventDefault();
    await axios
      .get(`${API_URL}/foods/search?name=${this.state.searchFoods}`)
      .then(res => {
        return res.data;
      })
      .then(res => {
        this.setState({ foods: res.data });
      });
  }

  render() {
    return (
      <div className="margin-top-100">
        <input
          type="text"
          className="inputText border border-danger"
          value={this.state.searchFoods}
          onChange={this.handleChangeSearchFoods}
        />
        <button
          className="button-border-sign textNavBar"
          onClick={this.submitForm}
        >
          Search
        </button>
        <Row className="homeProduct">
          {this.state.foods &&
            this.state.foods.map((food, index) => (
              <Col sm="4" key={index}>
                <CardImg
                  width="25%"
                  height="50%"
                  src={food.photos[0][0]}
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
      </div>
    );
  }
}

export default Home;

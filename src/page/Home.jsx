import React, { Component } from "react";
import { Row, InputGroup, InputGroupAddon, Input } from "reactstrap";
import axios from "axios";

import FoodThumbnail from "../medium/FoodThumbnail";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      foods: []
    };
    this.getIndex = this.getIndex.bind(this);
    this.handleChangeSearchFoods = this.handleChangeSearchFoods.bind(this);
  }

  getIndex(index) {
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

  async handleChangeSearchFoods(event) {
    let value = event.target.value;

    await axios
      .get(`${API_URL}/foods/search?name=${value}`)
      .then(res => {
        return res.data;
      })
      .then(res => {
        this.setState({ foods: res.data });
        console.log(this.state.searchedFoods);
      });
  }

  render() {
    return (
      <div>
        <div className="center">
          <InputGroup className="inputText">
            <Input
              className=" border border-danger"
              value={this.state.value}
              onChange={this.handleChangeSearchFoods}
              placeholder="Search Your Favorite Food"
            />
            <InputGroupAddon addonType="append">Search</InputGroupAddon>
          </InputGroup>
        </div>
        <Row className="homeProduct center">
          {this.state.foods &&
            this.state.foods.map((food, index) => (
              <FoodThumbnail key={index} index={index} food={food} />
            ))}
        </Row>
      </div>
    );
  }
}

export default Home;

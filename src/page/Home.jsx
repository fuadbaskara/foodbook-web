import React, { Component } from "react";
import { Row, Button } from "reactstrap";
import axios from "axios";

import FoodThumbnail from "../medium/FoodThumbnail";

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
    // console.log(index);
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
        // console.log(this.state.foods);
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
      <div>
        <div className="searchText">
          <input
            type="text"
            className="inputText border border-danger"
            value={this.state.searchFoods}
            onChange={this.handleChangeSearchFoods}
          />
          <Button
            color=""
            className="textNavBar btn-secondary"
            onClick={this.submitForm}
          >
            Search
          </Button>{" "}
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

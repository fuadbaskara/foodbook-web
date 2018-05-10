import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import axios from "axios";
import _ from "lodash";

import FoodUserThumbnail from "../medium/FoodUserThumbnail";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      photo: "",
      userFoods: []
    };
    this.deleteFood = this.deleteFood.bind(this);
  }

  getDataFood() {
    axios
      .get(`${API_URL}/foods`)
      .then(res => {
        res.data.data.forEach(dataId => {
          if (dataId._account === window.localStorage.userId) {
            this.setState({
              userFoods: this.state.userFoods.concat([dataId])
            });
          }
        });
        console.log(this.state.userFoods);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getDataAccount() {
    if (window.localStorage.id) {
      axios
        .get(`${API_URL}/accounts/${window.localStorage.id}`)
        .then(res => {
          this.setState({
            firstName: _.capitalize(res.data.data.firstName),
            lastName: _.capitalize(res.data.data.lastName),
            username: res.data.data.username,
            email: res.data.data.email,
            profile_picture: res.data.data.profile_picture
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  deleteFood(target_index) {
    const id = this.state.userFoods[target_index].id;
    axios({
      url: `${API_URL}/foods/${id}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.token
      }
    })
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    this.getDataAccount();
    this.getDataFood();
  }

  render() {
    return (
      <div className="margin-top-100">
        <div>
          <h1 className="center">
            Hi {`${this.state.firstName} ${this.state.lastName}`} Welcome to
            Profile Page
          </h1>
        </div>
        <Row>
          <Col>
            <div className="center">
              <Card style={{ width: "250px", marginTop: 10 }}>
                <CardImg
                  top
                  width="50%"
                  src={this.state.profile_picture}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>
                    {`${this.state.firstName} ${this.state.lastName}`}
                  </CardTitle>
                  <CardText>{this.state.email}</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="homeProduct center">
          <FoodUserThumbnail
            deleteFood={this.deleteFood}
            userFoods={this.state.userFoods}
          />
        </Row>
      </div>
    );
  }
}
export default Profile;

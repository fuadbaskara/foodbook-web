import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      photo: ""
    };
  }

  getDataAccount() {
    if (window.localStorage.id) {
      axios.get(`${API_URL}/accounts/${window.localStorage.id}`).then(res => {
        // res.data.data.map(food => {
        //   if (food.id == window.localStorage.id) {
        //     console.log(food);
        //   }
        // });
        this.setState({
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          username: res.data.data.username,
          email: res.data.data.email,
          photo: res.data.data.photo
        });
        console.log(res.data.data);
      });
    }
  }

  componentWillMount() {
    this.getDataAccount();
  }

  render() {
    return (
      <div className="margin-top-100">
        <div className="float-left">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt=""
          />
        </div>
        {/*<Card>
          <CardImg
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="User Avatar Image"
          />
          <CardBody>
            <CardTitle>
              FullName:
              {` ${this.state.firstName}
              ${this.state.lastName}`}
            </CardTitle>
          </CardBody>
        </Card>*/}
      </div>
    );
  }
}
export default Profile;

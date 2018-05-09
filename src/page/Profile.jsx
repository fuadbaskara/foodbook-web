import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Profile extends Component {
  constructor() {
    super();
  }

  async getDataAccount() {
    await axios.get(`${API_URL}/accounts`).then(res => {
      console.log(res);
    });
  }

  componentWillMount() {
    this.getDataAccount();
  }
  render() {
    return (
      <div className="margin-top-100">
        <Card className="containerProfile">
          <CardImg
            className="rounded-circle"
            top
            width="25%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="User Avatar Image"
          />
        </Card>
      </div>
    );
  }
}
export default Profile;

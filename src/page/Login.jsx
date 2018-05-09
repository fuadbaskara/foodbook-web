import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLogin: false
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChangeUsername(event) {
    let value = event.target.value;
    this.setState(() => {
      return { username: value };
    });
  }

  handleChangePassword(event) {
    let value = event.target.value;
    this.setState(() => {
      return { password: value };
    });
  }

  async submitForm(e) {
    e.preventDefault();
    // console.log(this.state.username, this.state.password);
    await axios
      .post(`${API_URL}/accounts/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res.data.token) {
          window.localStorage.token = res.data.token;
          //redirect here
          this.props.history.push(`/`);
        }
      })
      .catch(error => {
        console.log(error.res);
      });
  }

  render() {
    return (
      <div>
        <div className="Container">
          <Form onSubmit={this.submitForm}>
            <FormGroup>
              <Label for="exampleEmail">Username:</Label>
              <Input
                type="text"
                name="userid"
                placeholder="your username"
                value={this.state.username}
                onChange={this.handleChangeUsername}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="examplePassword">Password:</Label>
              <Input
                type="password"
                name="password"
                placeholder="Your Password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </FormGroup>
            <Button outline color="danger" size="lg" block>
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

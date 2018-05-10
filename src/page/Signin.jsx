import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const StyleH1 = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Lobster, cursive"
};

const StyleH3 = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "comfortaa"
};

const FlexContainer = {
  display: "flex",
  justifyContent: "center"
};

const StyleH6 = {
  fontFamily: "comfortaa",
  margin: "3px"
};

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLogin: false,
      isValidPassword: true
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
    console.log(this.state.username, this.state.password);
    await axios
      .post(`${API_URL}/accounts/signin`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.id);
        if (res.data.token) {
          console.log(res.data);
          window.localStorage.id = res.data.id;
          window.localStorage.token = res.data.token;
          window.localStorage.userId = res.data.userId;
          //redirect here
          this.setState({ isValidPassword: true });
          this.props.history.push(`/`);
        } else {
          this.setState({ isValidPassword: false });
        }
      })
      .catch(error => {
        console.log(error.res);
      });
  }

  render() {
    return (
      <div className="pt-5">
        <h1 style={StyleH1}>Welcome to Foodbook</h1>
        <h3 style={StyleH3}>Please sign in to access your account</h3>
        <div className="margin-top-60">
          <div className="Container">
            <Form onSubmit={this.submitForm}>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="userid"
                  placeholder="Your username"
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="examplePassword">Password</Label> &nbsp;&nbsp;
                {this.state.isValidPassword ? (
                  <span />
                ) : (
                  <span className="invalid-pas-notif">
                    (Please enter a valid password)
                  </span>
                )}
                <Input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
              </FormGroup>
              <Button outline color="danger" size="lg" block>
                Sign In
              </Button>
            </Form>
          </div>
          <div style={FlexContainer}>
            <div>
              <h6 style={StyleH6}>Don't have an account?</h6>
            </div>
            <div>
              <Link to="/signup">
                <h6 style={StyleH6}>Sign up now</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);

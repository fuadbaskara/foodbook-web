import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input } from "reactstrap";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submitForm = this.submitForm.bind(this)
  }

  handleChangeEmail(event) {
    let value = event.target.value;
    this.setState(() => {
      return { email : value };
    });
  }

  handleChangePassword(event) {
    let value = event.target.value;
    this.setState(() => {
      return { password : value };
    });
  }

async submitForm(e) {
  e.preventDefault()
  console.log(this.state.email, this.state.password)
  await axios
    .post(`${API_URL}/accounts/login`, {
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error.res);
    });
}

  render() {
    // console.log("state", this.state);
    return (
      <div className="margin-top-100">
      <div className="Container" >
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="text"
              name="userid"
              placeholder="Insert Your User Name"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Insert Your Password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </FormGroup>
          <Button outline color="danger" size="lg" block>
            Submit
          </Button>
        </Form>
      </div>
      </div>
    );
  }
}

export default Login;

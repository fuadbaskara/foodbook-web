import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUserName(event) {
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

  submitForm(event) {
    event.preventDefault();
  }

  render() {
    console.log("state", this.state);
    return (
      <div className="Container" onSubmit={this.submitForm}>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">User Name</Label>
            <Input
              type="text"
              name="userid"
              placeholder="Insert Your User Name"
              value={this.state.username}
              onChange={this.handleChangeUserName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Insert Your Password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </FormGroup>
          <FormGroup>
            <Button outline color="primary" size="lg" block>
              Sign Up
            </Button>
          </FormGroup>
          <Button outline color="danger" size="lg" block>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;

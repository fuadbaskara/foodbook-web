import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const containerForm = {
  width: "38%",
  marginLeft: "auto",
  marginRight: "auto",
  border: "solid lightskyblue 2px",
  padding: "5px",
  borderRadius: "3px",
  marginTop: "50px"
};

const inputStyle = {
  border: "solid black 2px"
};
const Signup = () => (
  <div className="margin-top-100">
    <div className="Container">
      <Form>
        <FormGroup>
          <Label for="exampleFirstname">Firstname</Label>
          <Input type="text" name="text" placeholder="input your Firstname" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLastname">Lastname</Label>
          <Input type="text" name="text" placeholder="input your Lastname" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="Email" name="Email" placeholder="input your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="input your Username"
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="Password"
            name="Password"
            placeholder="input your Password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Re-password</Label>
          <Input
            type="Password"
            name="password"
            placeholder="input your re-password"
          />
        </FormGroup>
        <FormGroup>
          <Button outline color="primary" size="lg" block>
            Sign Up
          </Button>
        </FormGroup>
      </Form>
    </div>
  </div>
);
export default Signup;

import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const containerForm = {
  border: "solid lightskyblue 4px",
  width: "38%",
  marginLeft: "auto",
  marginRight: "auto",
  border: "solid lightskyblue 2px",
  padding: "5px",
  borderRadius: "3px",
  marginTop: "50px"
};

const styleH1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const inputStyle = {
  border: "solid black 2px"
};

const Signup = () => (
  <div className="margin-top-100">
    <Form style={containerForm}>
      <FormGroup row>
        <Label for="firstname" sm={2}>
          FIRSTNAME{" "}
        </Label>
        <Col sm={10}>
          <Input
            type="firstname"
            name="firstname"
            id="firstname"
            placeholder="input your firstname"
            style={inputStyle}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastname" sm={2}>
          LASTNAME{" "}
        </Label>
        <Col sm={10}>
          <Input
            type="lastname"
            name="lastname"
            id="lastname"
            placeholder="input your lastname"
            style={inputStyle}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>
          EMAIL{" "}
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="input your email"
            style={inputStyle}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="username" sm={2}>
          USERNAME{" "}
        </Label>
        <Col sm={10}>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="input your username"
            style={inputStyle}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={2}>
          PASSWORD{" "}
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="input your password"
            style={inputStyle}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="re-password" sm={2}>
          RE-PASSWORD{" "}
        </Label>
        <Col sm={10}>
          <Input
            type="re-password"
            name="re-password"
            id="re-password"
            placeholder="input your re-password"
            style={inputStyle}
          />
        </Col>
      </FormGroup>
      <div style={buttonStyle}>
        <Button color="secondary">REGISTER</Button>{" "}
      </div>
    </Form>
  </div>
);
export default Signup;

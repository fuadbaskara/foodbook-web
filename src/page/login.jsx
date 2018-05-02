import React, { Component} from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Route} from "react-router-dom";

const containerForm = {
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  border: "solid lightskyblue 2px",
  padding: "5px",
  borderRadius: "3px",
  marginTop:"50px",
}

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const inputStyle = {
  border: "solid black 2px",
}

const centerText = {
  textAlign: "center"
};

class Login extends React.Component {
  render() {
    return (
      <div>
      <Form style = {containerForm}>
         <FormGroup row>
           <Label for="username" sm={2}>USERNAME </Label>
           <Col sm={10}>
             <Input type="username" name="username" id="username" placeholder="input your username" style={inputStyle} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label for="examplePassword" sm={2}>PASSWORD </Label>
           <Col sm={10}>
             <Input type="password" name="password" id="examplePassword" placeholder="input your password" style={inputStyle} />
           </Col>
         </FormGroup>
         <div style={buttonStyle}>
         <Button color="secondary">LOG IN</Button>{' '}
         </div>
       </Form>
      </div>
    );
  }
}

export default Login;

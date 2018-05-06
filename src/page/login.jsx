import React, { Component} from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Route} from "react-router-dom";

const containerForm = {
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  border: "solid #bb1212 2px",
  padding: "5px",
  borderRadius: "3px",
  marginTop:"50px",
}

const border = {
  borderBottom: "solid #bb1212 2px"
}

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#bb1212"
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
        <FormGroup>
          <Label for="login" sm={12} style={border}>Login</Label>
        </FormGroup>
         <FormGroup row>
           <Label for="username" sm={2}>USERNAME </Label>
           <Col md={12}>
             <Input type="username" name="username" id="username" placeholder="input your username" style={inputStyle} />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Label for="examplePassword" sm={2}>PASSWORD </Label>
           <Col md={12}>
             <Input type="password" name="password" id="examplePassword" placeholder="input your password" style={inputStyle} />
           </Col>
         </FormGroup>
         <FormGroup row style={buttonStyle}>
             <Button style={buttonStyle} size="sm" block>Login</Button>
        </FormGroup>
       </Form>
      </div>
    );
  }
}

export default Login;

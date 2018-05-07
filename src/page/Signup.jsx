import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const InputStyle = {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inlineBlock",
  border: "solid black 2px",
  borderRadius: "4px",
  boxSizing: "borderBox"
};

const inputSubmit = {
  width: "100%",
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

class Signup extends Component {
constructor(){
  super();
  this.state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
  };
  this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
  this.handleChangeLastname = this.handleChangeLastname.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangeUsername = this.handleChangeUsername.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.handleChangeRePassword = this.handleChangeRePassword.bind(this);
}

handleChangeFirstname(event){
  let value = event.target.value;
  this.setState(() =>{
    return { firstname : value};
  })
}

handleChangeLastname(event){
  let value = event.target.value;
  this.setState(() => {
    return { lastname : value };
  })
}

handleChangeEmail(event){
  let value = event.target.value;
  this.setState(() => {
    return { email : value };
  })
}

handleChangeUsername(event){
  let value = event.target.value;
  this.setState(() => {
    return { username : value };
  })
}

handleChangePassword(event){
  let value = event.target.value;
  this.setState(() =>{
    return { password : value };
  })
}

handleChangeRePassword(event){
  let value = event.target.value;
  this.setState(() =>{
    return { repassword : value }
  })
}

submitForm(event){
  event.preventDefault();
}

render(){
  console.log("state", this.state);
return(
  <div className="margin-top-100">
    <div className="Container" onSubmit={this.submitForm}>
      <Form>
        <FormGroup>
          <Label for="exampleFirstname">Firstname</Label>
          <Input
            type="text"
            name="text"
            placeholder="input your Firstname"
            value={this.state.firstname}
            onChange={this.handleChangeFirstname}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleLastname">Lastname</Label>
          <Input
          type="text"
          name="text"
          placeholder="input your Lastname"
          value={this.state.lastname}
          onChange={this.handleChangeLastname} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
          type="Email"
          name="Email"
          placeholder="input your Email"
          value={this.state.email}
          onChange={this.handleChangeEmail} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="input your Username"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="Password"
            name="Password"
            placeholder="input your Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Re-password</Label>
          <Input
            type="Password"
            name="password"
            placeholder="input your re-password"
            value={this.state.repassword}
            onChange={this.handleChangeRePassword}
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
)}
}




export default Signup;

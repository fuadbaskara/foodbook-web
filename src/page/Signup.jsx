import React from "react";
import { Form } from "reactstrap";

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

const divStyle = {
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  padding: "20px"
};

class Signup extends React.Component{
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: ""
      };
      this.handleChangeFirstName= this.handleChangeFirstName.bind(this);
      this.handleChangeLastName= this.handleChangeLastName.bind(this);
      this.handleChangeEmail= this.handleChangeEmail.bind(this);
      this.handleChangeUserName= this.handleChangeUserName.bind(this);
      this.handleChangePassword= this.handleChangePassword.bind(this);
    }

    handleChangeFirstName(event) {
      let value = event.target.value;
      this.setState(()=> {
        return {firstname: value};
      });
    }

    handleChangeLastName(event) {
      let value = event.target.value;
      this.setState(()=>{
        return {lastname: value};
      });
    }

    handleChangeEmail(event){
      let value = event.target.value;
      this.setState(()=>{
        return {email: value};
      });
    }

    handleChangeUserName(event){
      let value = event.target.value;
      this.setState(()=> {
        return {username: value};
      });
    }

    handleChangePassword(event){
      let value = event.target.value;
      this.setState(()=> {
        return {password: value};
      });
    }

    submitForm(event){
      event.preventDefault();
    }

  render(){
    console.log("state", this.state);
    return (
      <div className="Container" onSubmit={this.submitForm} styl={divStyle}>
        <Form>
          <label for="fname" >First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            style={InputStyle}
            value={this.state.firstname}
            onChange={this.handleChangeFirstName}
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            style={InputStyle}
            value={this.state.lastname}
            onChange={this.handleChangeLastName}
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            style={InputStyle}
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />

          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your username.."
            style={InputStyle}
            value={this.state.username}
            onChange={this.handleChangeUserName}
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password.."
            style={InputStyle}
            value={this.state.password}
            onChange={this.handleChangePassword}
          />

          <input type="submit" value="SIGN UP" style={inputSubmit} />
        </Form>
      </div>
    )
  }
};

export default Signup;

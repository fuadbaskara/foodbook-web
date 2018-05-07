import React from "react";
import { Form } from "reactstrap";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

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

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: ""
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleChangeFirstName(event) {
    let value = event.target.value;
    this.setState(() => {
      return { firstName: value };
    });
  }

  handleChangeLastName(event) {
    let value = event.target.value;
    this.setState(() => {
      return { lastName: value };
    });
  }

  handleChangeEmail(event) {
    let value = event.target.value;
    this.setState(() => {
      return { email: value };
    });
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

  async submitButton() {
    await axios
      .post(`${API_URL}/accounts`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        res, console.log(res.data);
      })
      .catch(error => {
        console.log(error.res);
      });
    console.log(this.state.firstName);
  }

  render() {
    return (
      <div className="Container" onSubmit={this.submitForm} styl={divStyle}>
        <Form>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your name.."
            style={InputStyle}
            value={this.state.firstName}
            onChange={this.handleChangeFirstName}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            style={InputStyle}
            value={this.state.lastName}
            onChange={this.handleChangeLastName}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            style={InputStyle}
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your username.."
            style={InputStyle}
            value={this.state.username}
            onChange={this.handleChangeUserName}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password.."
            style={InputStyle}
            value={this.state.password}
            onChange={this.handleChangePassword}
          />

          {/*<Button
            style={inputSubmit}
            color="danger"
            block
            size="lg"
            onClick={this.submitButton}
          >
            Submit
          </Button>*/}

          <input
            type="submit"
            value="SIGN UP"
            style={inputSubmit}
            onClick={this.submitButton}
          />
        </Form>
      </div>
    );
  }
}

export default Signup;

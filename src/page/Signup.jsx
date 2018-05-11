import React from "react";
import { Form, FormGroup, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import ReactFilestack from "filestack-react";
import axios from "axios";

const API_KEY = "AGPirPvMfTs2BMOi8EPmaz";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

const StyleH1 = {
  fontFamily: "Lobster, cursive",
  display: "flex",
  justifyContent: "center"
};

const InputStyle = {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  marginTop: "-10px",
  display: "inlineBlock",
  border: "solid black 2px",
  borderRadius: "4px",
  boxSizing: "borderBox"
};

const divStyle = {
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  padding: "20px"
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

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      profile_picture: ""
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleUpload(response) {
    if (response.filesUploaded[0].url) {
      this.setState({
        profile_picture: response.filesUploaded[0].url
      });
    }
    console.log(this.state.profile_picture);
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
    const value = event.target.value;
    this.setState(() => {
      return { password: value };
    });
  }

  // submitForm(event) {
  //   event.preventDefault();
  // }

  async submitForm(event) {
    event.preventDefault();
    await axios
      .post(`${API_URL}/accounts`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        profile_picture: this.state.profile_picture
      })
      .then(res => {
        console.log(res);
        this.props.history.push("/signin");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="pt-5">
        <h1 style={StyleH1}>SIGN UP FoodBook.com</h1>
        <div className="margin-top-60">
          <div className="Container" style={divStyle}>
            <Form onSubmit={this.submitForm}>
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
              <ReactFilestack
                apikey={API_KEY}
                onSuccess={response => this.handleUpload(response)}
                render={({ onPick }) => (
                  <FormGroup row className="float-right">
                    <Button outline color="danger" size="sm" onClick={onPick}>
                      Upload Your Photo
                    </Button>
                  </FormGroup>
                )}
              />

              <input
                type="submit"
                value="SIGN UP"
                style={inputSubmit}
                onClick={this.submitForm}
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);

import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const InputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inlineBlock",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "borderBox",
}

const inputSubmit = {
  width: "100%",
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
}

const divStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
}

const Signup = () => (
  <div className="margin-top-100">
    <div className="Container" styl={divStyle}>
      <Form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." style={InputStyle} />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={InputStyle} />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email.." style={InputStyle} />

        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Your username.." style={InputStyle} />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your password.." style={InputStyle} />

        <label for="lname">Re-Password</label>
        <input type="password" id="password" name="password" placeholder="Your password again.." style={InputStyle} />

        <input type="submit" value="SIGN UP" style={inputSubmit} />
      </Form>
    </div>
  </div>
);
export default Signup;

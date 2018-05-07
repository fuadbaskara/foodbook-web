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

const Signup = () => (
  <div className="Container" styl={divStyle}>
    <Form>
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
        style={InputStyle}
      />

      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
        style={InputStyle}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email.."
        style={InputStyle}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Your password.."
        style={InputStyle}
      />

      <input type="submit" value="SIGN UP" style={inputSubmit} />
    </Form>
  </div>
);
export default Signup;

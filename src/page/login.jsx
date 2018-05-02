import React, { Component} from "react";
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Route} from "react-router-dom";


const divStyle = {
  padding: "50px",
  border: "solid lightskyblue 2px",
  width: "40%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "5px",
  backgroundColor: "red"
};

const fontStyle = {
  font: "bold 18px arial, sans-serif",
  padding: "20px"
};

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const inputStyle = {
  border: "solid black 2px"
};

const centerText = {
  textAlign: "center"
};

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={centerText}>FORM LOGIN</h1>
        </div>
        <form style={divStyle}>
          <div>
            <label style={fontStyle}>USERNAME :</label>
            <input type="username" style={inputStyle} />
          </div>
          <div>
            <label style={fontStyle}>PASSWORD :</label>
            <input type="password" style={inputStyle} />
          </div>
          <div style={buttonStyle}>
            <Button color="secondary">LOGIN</Button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

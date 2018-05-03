import React, { Component} from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Route} from "react-router-dom";


const containerForm = {
  border: "solid lightskyblue 4px",
  width: "38%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "3px",
  borderRadius: "5px",
}

const styleH1 = {
  display: "flex",
  justifyContent: "center",
}

const labelStyles ={
  padding: "8px",
}

const buttonRegister = {
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
}

const containerButton = {
  padding: "3px",
}

const inputStyle = {
  borderRadius: "4px",
  width: "90%",
  border: "solid black 2px",
}

const Signup = () => (
  <div>
    <div style={containerForm}>
    <form>
      <div>
        <h1 style={styleH1}>-- SIGN UP --</h1>
      </div>
      <div>
        <label style={labelStyles}>Firstname :</label>
      </div>
      <div>
        <input style={inputStyle} />
      </div>
      <div>
        <label style={labelStyles}>Lastname :</label>
      </div>
      <div>
        <input style={inputStyle} />
      </div>
      <div>
        <label style={labelStyles}>Email :</label>
      </div>
      <div>
        <input style={inputStyle} />
      </div>
      <div>
        <label style={labelStyles}>Username :</label>
      </div>
      <div>
        <input style={inputStyle} />
      </div>
      <div>
        <label style={labelStyles}>Password :</label>
      </div>
      <div>
        <input style={inputStyle} />
      </div>
      <div>
        <label style={labelStyles}>Re_Password :</label>
      </div>
      <div>
        <input style={inputStyle} />
      </div>
      <div style={containerButton}>
        <Button outline color="danger" style={buttonRegister}>SUBMIT</Button>
      </div>
    </form>
    </div>
  </div>
    )
export default Signup;

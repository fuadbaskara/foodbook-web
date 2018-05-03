
import React, { Component} from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText } from 'reactstrap';
import {
  Link,
  Route} from "react-router-dom";


class Login extends Component{
  constructor(){
    super();
    this.state={
      username: "",
      password: "",
    };
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeUserName(event){
    let value = event.target.value;
    this.setState(() =>{
      return { username: value};
    })
  }

  handleChangePassword(event){
    let value = event.target.value;
    this.setState(() =>{
     return{ password: value};
    })
  }

  submitForm(event){
    event.preventDefault()
  }


   render(){
     console.log('state', this.state);
     return(
       <div className="Container" onSubmit={this.submitForm}>
         <Form>
            <FormGroup>
              <Label for="exampleEmail">User Name</Label>
              <Input
              type="text"
              name="userid"
              placeholder="Insert Your User Name"
              value={this.state.username}
              onChange={this.handleChangeUserName}/>
            </FormGroup>
           <FormGroup>
             <Label for="examplePassword">Password</Label>
             <Input
             type="password"
             name="password"
             placeholder="Insert Your Password"
             value={this.state.password}
             onChange={this.handleChangePassword}/>
           </FormGroup>
           <FormGroup>
              <Button outline color="primary" size="lg" block>Sign Up</Button>
           </FormGroup>
              <Button outline color="danger" size="lg" block>Submit</Button>
           </Form>
       </div>
     )
   }
 }



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

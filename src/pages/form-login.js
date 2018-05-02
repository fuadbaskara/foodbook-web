import React from 'react';
import { Button } from 'reactstrap';


const divStyle= {
  padding: "50px",
  border: "solid lightskyblue 2px",
  width: "40%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "5px",
  backgroundColor: "red",
};

const fontStyle = {
  font: "bold 18px arial, sans-serif",
  padding: "20px",
}

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}


const inputStyle = {
  border: "solid black 2px",
}

class Formlogin extends React.Component {
  render(){
    return(
      <div>
        <form style={divStyle}>
        <div>
          <label style={fontStyle}>USERNAME :</label>
          <input type="username" style={inputStyle}></input>
        </div>
        <div>
          <label style={fontStyle}>PASSWORD :</label>
          <input type="password" style={inputStyle}></input>
        </div>
        <div style={buttonStyle}>
          <Button color="secondary">LOGIN</Button>{' '}
        </div>
        </form>
      </div>
    )
  }
}

export default Formlogin;

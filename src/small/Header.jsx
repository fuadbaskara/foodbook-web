import React, { Component } from "react";
import { Link } from "react-router-dom";

const StyleImage = {
  width: "22%",
  display: "flex",
  justifyContent: "left",
  marginTop: "-45px"
};

class Header extends Component {
  constructor(){
    super();
    this.state ={
      searchFoods: ""
    }
    this.handleChangeSearchFoods = this.handleChangeSearchFoods.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChangeSearchFoods(event){
    let value = event.target.value;
    this.setState(() =>{
      return { searchFoods : value }
    })
  }

  submitForm(event) {
    event.preventDefault();
  }

  render() {
  console.log("state", this.state);
  return (
    <div className="App-header fixed-top">
      <div className="display-inline margin-right-30"
       onSubmit={this.submitForm}>
         <input
           type="text"
           className="inputText border border-danger"
           value={this.state.searchFoods}
           onChange={this.handleChangeSearchFoods}/>
         <button
           className="button-border-sign textNavBar"
           onClick={this.submitForm}>Search</button>
      </div>
        <Link
          className="textNavBar text-right mx-2"
          to="/">
          Home
        </Link>
        <Link
          className="textNavBar text-right mx-2"
          to="/profile">
          Profile
        </Link>
        <Link
          className="textNavBar text-right mx-2"
          to="/addfood">
          Add Food
        </Link>
        <Link
          className="border-sign textNavBar text-right mx-2"
          to="/login">
          Sign In
        </Link>
      <Link
          className="border-sign textNavBar text-right mx-2"
          to="/signup">
          Sign Up
      </Link>
      <div>
        <Link to="/">
          <img
            src={require(`../image/foodbook-logo.png`)}
            alt="Foodbook Logo"
            style={StyleImage}
          />
        </Link>
      </div>
    </div>
  );
 }
}

export default Header;

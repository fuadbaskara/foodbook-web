import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label } from "reactstrap";

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
      inputFoodName: "",
      inputAddress: "",
      inputCity: "",
      inputLocation: "",
      inputDescriptionMenu: "",
      inputPrice: ""
    };
    this.handleChangeFood = this.handleChangeFood.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeDescriptionMenu = this.handleChangeDescriptionMenu.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleClick = this.handleClick .bind(this)
  }

  handleChangeFood(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputFoodName: value };
    });
  }

  handleChangeAddress(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputAddress: value };
    });
  }

  handleChangeCity(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputCity: value };
    });
  }

  handleChangeLocation(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputLocation: value };
    });
  }

  handleChangeDescriptionMenu(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputDescriptionMenu: value };
    });
  }

  handleChangePrice(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputPrice: value };
    });
  }

   handleClick(){
     if(
       this.state.inputFoodName !== "" &&
       this.state.inputAddress !== "" &&
       this.state.inputCity!== "" &&
       this.state.inputLocation !== "" &&
       this.state.inputDescriptionMenu !== "" &&
       this.state.inputPrice !== ""
     ){
       this.setState(prevState => {
         return{
           foods: prevState.foods.concat({
             food: prevState.inputFoodName,
             address:prevState.inputAddress,
             city: prevState.inputCity,
             location: prevState.inputLocation,
             description: prevState.inputDescriptionMenu,
             price: prevState.inputPrice
           }),
           inputFoodName: "",
           inputAddress: "",
           inputCity: "",
           inputLocation: "",
           inputDescriptionMenu: "",
           inputPrice: ""
         };
       });
     }
   }

  submitForm(event) {
    event.preventDefault();
  }

  render() {
    console.log("state", this.state);
    return (
      <div className="margin-top-100" onSubmit={this.submitForm}>
        <Form className="addFoodForm">
          <FormGroup row>
            <Label for="exampleFood" sm={2}>
              FOOD NAME
            </Label>
            <Col sm={10}>
              <Input
                type="foodname"
                name="foodname"
                placeholder="Insert Food Name"
                value={this.state.inputFoodName}
                onChange={this.handleChangeFood}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleAddress" sm={2}>
              ADDRESS
            </Label>
            <Col sm={10}>
              <Input
                type="Address"
                name="Address"
                placeholder="Insert Address"
                value={this.state.inputAddress}
                onChange={this.handleChangeAddress}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleCity" sm={2}>
              CITY
            </Label>
            <Col sm={10}>
              <Input
                type="City"
                name="City"
                placeholder="Insert City"
                value={this.state.inputCity}
                onChange={this.handleChangeCity}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleLocation" sm={2}>
              LOCATION
            </Label>
            <Col sm={10}>
              <Input
                type="Location"
                name="Location"
                placeholder="Insert Your Location"
                value={this.state.inputLocation}
                onChange={this.handleChangeLocation}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleMenus" sm={2}>
              DESCRIPTION MENU
            </Label>
            <Col sm={10}>
              <Input
                type="Menus"
                name="Menus"
                placeholder="Insert Your Menu"
                value={this.state.inputDescriptionMenu}
                onChange={this.handleChangeDescriptionMenu}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePrice" sm={2}>
              PRICE
            </Label>
            <Col sm={10}>
              <Input
                type="Price"
                name="Price"
                placeholder="Insert Price Menu"
                value={this.state.inputPrice}
                onChange={this.handleChangePrice}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePhoto" sm={2}>
              PHOTO
            </Label>
            <Col sm={10}>
              <button
                id="button-upload"
                type="button"
                className="btn btn-default"
              >Upload <span className="caret" />
              </button>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={12}>
              <Button
                color="danger"
                size="lg"
                block
                onClick={this.handleClick}>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default AddFood;

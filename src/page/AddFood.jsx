import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Input, Label } from "reactstrap";
import ReactFilestack from "filestack-react";
import axios from "axios";

const API_KEY = "AGPirPvMfTs2BMOi8EPmaz";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      overview: "",
      price: "",
      location: "",
      city: "",
      photos: [],
      file_uploaded: 0
    };
    this.handleChangeFood = this.handleChangeFood.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeDescriptionMenu = this.handleChangeDescriptionMenu.bind(
      this
    );
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleUpload(response) {
    if (response.filesUploaded[0].url) {
      this.setState({
        photos: this.state.photos.concat(response.filesUploaded[0].url),
        file_uploaded: this.state.file_uploaded + 1
      });
    }
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

  // submitForm(event) {
  //   event.preventDefault();
  // }

  async submitForm() {
    await axios
      .post(`${API_URL}/foods`, {
        name: this.state.inputFoodName,
        overview: this.state.inputDescriptionMenu,
        price: this.state.inputPrice,
        location: "",
        city: this.state.inputCity,
        photos: this.state.photos
      })
      .then(res => {
        res, console.log(res);
      })
      .catch(error => {
        console.log(error.res);
      });
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
              res ADDRESS
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

          <ReactFilestack
            apikey={API_KEY}
            onSuccess={response => this.handleUpload(response)}
            render={({ onPick }) => (
              <FormGroup row>
                <Label for="examplePrice" sm={2}>
                  PHOTO
                </Label>
                <Col sm={10}>
                  <Button
                    outline="outline"
                    color="info"
                    size="sm"
                    onClick={onPick}
                  >
                    Upload
                  </Button>&nbsp;<span>&nbsp;{this.state.file_uploaded}</span>
                </Col>
              </FormGroup>
            )}
          />
          <FormGroup check row>
            <Col sm={12}>
              <Button
                color="danger"
                size="lg"
                block="block"
                onClick={this.submitForm}
              >
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

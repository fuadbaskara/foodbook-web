import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Input, Label } from "reactstrap";
import ReactFilestack from "filestack-react";
import axios from "axios";
import { compose, withProps, lifecycle } from "recompose";
import _ from "lodash";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Link, withRouter } from "react-router-dom";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";

const StyleH3 = {
  marginTop: "30px",
  fontFamily: "Comfortaa",
  display: "flex",
  justifyContent: "center"
};

/*global google*/
const API_KEY = "AGPirPvMfTs2BMOi8EPmaz";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3030";

const MapWithASearchBox = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB8hBBo2JuGbJqmC50AR1CrJ20ogcbOU0g&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: {
          lat: -6.1822265,
          lng: 106.8013591
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });

          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }));

          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );

          // console.log(JSON.stringify(refs.map.getCenter()));
          // console.log(refs);

          this.setState({
            center: nextCenter,
            markers: nextMarkers
          });
          // refs.map.fitBounds(bounds);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
      />
    </SearchBox>
    {props.markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ))}
  </GoogleMap>
));

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      overview: "",
      minPrice: "",
      maxPrice: "",
      detailLocation: "",
      city: "",
      street: "",
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
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleUpload(response) {
    if (response.filesUploaded[0].url) {
      this.setState({
        photos: this.state.photos.concat([response.filesUploaded[0].url]),
        file_uploaded: this.state.file_uploaded + 1
      });
    }
    // console.log(this.state.photos);
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

  handleChangeMinPrice(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputMinPrice: value };
    });
  }

  handleChangeMaxPrice(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputMaxPrice: value };
    });
  }

  // submitForm(event) {
  //   event.preventDefault();
  // }

  async submitForm(event) {
    event.preventDefault();
    await axios;
    axios({
      url: `${API_URL}/foods`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.token
      },
      data: {
        name: this.state.inputFoodName,
        overview: this.state.inputDescriptionMenu,
        minPrice: this.state.inputMinPrice,
        maxPrice: this.state.inputMaxPrice,
        detailLocation: this.state.inputLocation,
        city: this.state.inputCity,
        street: this.state.inputAddress,
        photos: this.state.photos
      }
    })
      // .post(`${API_URL}/foods`, {
      //   headers: {
      //     Authorization: "Bearer " + window.localStorage.token
      //   },
      //   name: this.state.inputFoodName,
      //   overview: this.state.inputDescriptionMenu,
      //   minPrice: this.state.inputMinPrice,
      //   maxPrice: this.state.inputMaxPrice,
      //   detailLocation: this.state.inputLocation,
      //   city: this.state.inputCity,
      //   street: this.state.inputAddress,
      //   photos: this.state.photos
      //   // token: window.localStorage.token
      // })

      .then(res => {
        console.log(res.data.data);
        const id = res.data.data.id;
        this.props.history.push(`/food/${id}`);
      })
      .catch(error => {
        alert("res");
        console.log(error.res);
      });
  }

  render() {
    return (
      <div>
        <h3 style={StyleH3}>You can Add Food in here :</h3>
        <div>
          <div>
            <Form onSubmit={this.submitForm} className="addFoodForm">
              {/*Foodname Input*/}
              <FormGroup row>
                <Label htmlFor="exampleFood" sm={2}>
                  FOOD NAME
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="foodname"
                    name="foodname"
                    placeholder="Insert Food Name"
                    value={this.state.inputFoodName}
                    onChange={this.handleChangeFood}
                  />
                </Col>
              </FormGroup>
              {/*Overview/Description input*/}
              <FormGroup row>
                <Label htmlFor="exampleMenus" sm={2}>
                  DESCRIPTION MENU
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    id="menus"
                    name="menus"
                    className="textarea-input"
                    placeholder="Insert Your Menu"
                    value={this.state.inputDescriptionMenu}
                    onChange={this.handleChangeDescriptionMenu}
                  />
                </Col>
              </FormGroup>
              {/*Detail Location input*/}
              <FormGroup row>
                <Label htmlFor="exampleAddress" sm={2}>
                  ADDRESS
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Insert Address"
                    value={this.state.inputAddress}
                    onChange={this.handleChangeAddress}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="exampleCity" sm={2}>
                  CITY
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Insert City"
                    value={this.state.inputCity}
                    onChange={this.handleChangeCity}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="exampleLocation" sm={2}>
                  DETAIL LOCATION
                </Label>
                <Col sm={10}>
                  {/*<MapWithASearchBox />*/}
                  <Input
                    type="textarea"
                    id="price"
                    name="price"
                    className="textarea-input"
                    placeholder="Insert Detail Location of Your Food"
                    value={this.state.inputLocation}
                    onChange={this.handleChangeLocation}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="examplePrice" sm={2}>
                  PRICE
                </Label>
                <Col sm={5}>
                  <Input
                    type="number"
                    name="Price"
                    placeholder="Insert Minimum Price"
                    value={this.state.inputMinPrice}
                    onChange={this.handleChangeMinPrice}
                  />
                </Col>
                <Col sm={5}>
                  <Input
                    type="number"
                    name="Price"
                    placeholder="Insert Maximum Price"
                    value={this.state.inputMaxPrice}
                    onChange={this.handleChangeMaxPrice}
                  />
                </Col>
              </FormGroup>

              {/*Use FILESTACK API to upload photos*/}
              <ReactFilestack
                apikey={API_KEY}
                onSuccess={response => this.handleUpload(response)}
                render={({ onPick }) => (
                  <FormGroup row>
                    <Label htmlFor="examplePrice" sm={2}>
                      PHOTO
                    </Label>
                    <Col sm={10}>
                      <Button outline color="danger" size="sm" onClick={onPick}>
                        Upload
                      </Button>&nbsp;<span>
                        &nbsp;{this.state.file_uploaded}
                      </span>
                    </Col>
                  </FormGroup>
                )}
              />

              <FormGroup check row>
                <Col sm={12}>
                  <Link to="/">
                    <Button
                      className="width-full"
                      color="danger"
                      size="lg"
                      onClick={this.submitForm}
                    >
                      Submit
                    </Button>
                  </Link>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AddFood);

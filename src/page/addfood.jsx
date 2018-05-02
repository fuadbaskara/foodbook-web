import React, { Component } from "react";
import {
  Col,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Card,
  CardImg,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, Route } from "react-router-dom";

import Home from "./home";

const addFood = ({ match }) => (
  <div>
    <Form className="addFoodForm">
      <FormGroup row>
        <Label for="exampleFood" sm={2}>
          FOOD NAME
        </Label>
        <Col sm={10}>
          <Input
            type="foodname"
            name="foodname"
            placeholder="insert food name"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleAddress" sm={2}>
          ADDRESS
        </Label>
        <Col sm={10}>
          <Input type="Address" name="Address" placeholder="insert Address" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleCity" sm={2}>
          CITY
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Jakarta</option>
            <option>Jakarta</option>
            <option>Jakarta</option>
            <option>Jakarta</option>
            <option>Jakarta</option>
          </Input>
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
            placeholder="insert your Location"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleMenus" sm={2}>
          MENUS
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>MENUS</option>
            <option>MENUS</option>
            <option>MENUS</option>
            <option>MENUS</option>
            <option>MENUS</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="examplePrice" sm={2}>
          PRICE
        </Label>
        <Col sm={10}>
          <Input type="Price" name="Price" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="examplePhoto" sm={2}>
          PHOTO
        </Label>
        <Col sm={10}>
          <Input type="Photo" name="Photo" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 6 }}>
          <Button color="danger">Submit</Button>{" "}
        </Col>
      </FormGroup>
    </Form>
  </div>
);
export default addFood;

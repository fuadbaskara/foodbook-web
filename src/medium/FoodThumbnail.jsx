import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const MAX_LENGTH = 50;

const FoodThumbnail = ({ food, index }) => (
  <Col xs={11} sm={5} md={4} lg={3} className="card-full border-red">
    <CardImg height="50%" src={food.photos[0][0]} alt="Food Image" />
    <CardBody>
      <CardTitle>{food.name}</CardTitle>
      {food.overview.length > MAX_LENGTH ? (
        <div>
          {`${food.overview.substring(0, MAX_LENGTH)} `}
          <Link to={`/food/${food.id}`} className="paragraph">
            Read more...
          </Link>
        </div>
      ) : (
        <CardText>{food.overview}</CardText>
      )}
      <Link to={`/food/${food.id}`}>
        <Button className="width-full">Details</Button>
      </Link>
    </CardBody>
  </Col>
);

export default FoodThumbnail;

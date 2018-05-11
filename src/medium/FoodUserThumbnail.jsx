import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, CardImg, CardBody, CardTitle, Button } from "reactstrap";

const FoodUserThumbnail = props => (
  <div className="width-full">
    <h1 className="center">List of Your Food</h1>
    <Row className="width-full homeProduct center">
      {props.userFoods.map((dataId, index) => (
        <Col
          xs={11}
          sm={5}
          md={4}
          lg={3}
          className="card-full border-red"
          key={index}
        >
          <CardImg height="50%" src={dataId.photos[0][0]} alt="Food Image" />
          <CardBody>
            <CardTitle>{dataId.name}</CardTitle>
            <Button
              className="width-full"
              onClick={() => {
                props.deleteFood(index);
              }}
            >
              Delete
            </Button>
          </CardBody>
        </Col>
      ))}
    </Row>
  </div>
);

export default withRouter(FoodUserThumbnail);

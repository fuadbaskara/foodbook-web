import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const StyleH1 = {
    marginTop: "100px",
    fontFamily: "Comfortaa",
    display: "flex",
    justifyContent: "center",
}

const ContainerStyle={
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
}

const CardContainer = {
    marginTop: "10px",
    borderRadius: "8px",
    border: "solid lightskyblue 3px",
    boxShadow: "0px 10px 8px 2px rgba(92, 95, 99, 0.86)",
}

const CardStyle = {
  fontSize: "1.5em",
}

const Team = () => (
    <div>
      <h1 style={StyleH1}>Team Member :</h1>
      <Container style={ContainerStyle}>
        <Row>
          <Col sm="4">
          <Card style={CardContainer}>
            <CardImg top width="100%" src={require(`../image/Team/miftah.jpg`)} alt="Miftah Faris" />
            <CardBody>
              <CardTitle style={CardStyle}>Miftah Faris (PM) </CardTitle>
              <CardText>Full-Stack Developer</CardText>
            </CardBody>
          </Card>
          </Col>

          <Col sm="4">
          <Card style={CardContainer}>
            <CardImg top width="100%" src={require(`../image/Team/fuad.jpg`)} alt="Fuad Baskara" />
            <CardBody>
              <CardTitle style={CardStyle}>Fuad Baskara</CardTitle>
              <CardText>Full-Stack Developer</CardText>
            </CardBody>
            </Card>
          </Col>
          <Col sm="4">
          <Card style={CardContainer}>
            <CardImg top width="100%" src={require(`../image/Team/yanuar.jpg`)} alt="Yanuar Yudhistira" />
            <CardBody>
              <CardTitle style={CardStyle}>Yanuar Yudhistira</CardTitle>
              <CardText>Back-End Developer</CardText>
            </CardBody>
            </Card>
          </Col>
          <Col sm="4">
          <Card style={CardContainer}>
            <CardImg top width="100%" src={require(`../image/Team/dedek.jpeg`)} alt="Dedek Julianto" />
            <CardBody>
              <CardTitle style={CardStyle}>Dedek Julianto</CardTitle>
              <CardText>Back-End Developer</CardText>
            </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card style={CardContainer}>
              <CardImg top width="100%" src={require(`../image/Team/rizal.jpg`)} alt="Rizal Zulkarnain" />
              <CardBody>
                <CardTitle style={CardStyle}>Rizal Zulkarnain</CardTitle>
                <CardText>Front-End Developer</CardText>
            </CardBody>
            </Card>
          </Col>
          <Col sm="4">
          <Card style={CardContainer}>
            <CardImg top width="100%" src={require(`../image/Team/dodi.jpg`)} alt="Stefanus Doddy" />
            <CardBody>
              <CardTitle style={CardStyle}>Stefanus Doddy</CardTitle>
              <CardText>Front-End Developer</CardText>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
);

export default Team;

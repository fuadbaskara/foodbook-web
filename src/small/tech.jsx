import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const StyleH1 = {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    fontSize: "2em",
    fontFamily: "Comfortaa",
}


const LogoTechStack = {
    marginTop: "20px",
    width: "350px",
  }

const LogoTechStack2 = {
  marginTop: "20px",
  width: "200px",
}

const Tech = () => (
  <div>

    <h1 style={StyleH1}>FoodBook.com TECH STACK</h1>

  <Container>
  <Row>
      <Col sm="6">
       <img
         src={require(`../image/github-logo.png`)}
         alt="Github Logo"
         style={LogoTechStack}
       />
      </Col>
       <Col sm="6">
       <img
         src={require(`../image/React-logo.png`)}
         alt="React Logo"
         style={LogoTechStack}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/filestack-logo.png`)}
         alt="Filestack Logo"
         style={LogoTechStack}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/express.png`)}
         alt="Express Logo"
         style={LogoTechStack}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/reactstrap.png`)}
         alt="Reactstrap Logo"
         style={LogoTechStack2}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/netlify.png`)}
         alt="Netlify Logo"
         style={LogoTechStack2}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/nodejs.png`)}
         alt="NodeJS Logo"
         style={LogoTechStack2}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/heroku.png`)}
         alt="Heroku Logo"
         style={LogoTechStack2}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/mongo.png`)}
         alt="Mongo Logo"
         style={LogoTechStack}
       />
       </Col>
       <Col sm="6">
       <img
         src={require(`../image/mongoose.png`)}
         alt="Mongoose Logo"
         style={LogoTechStack}
       />
       </Col>
  </Row>

  </Container>

  </div>

);


export default Tech;

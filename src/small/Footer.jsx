import React from "react";
import { Link } from "react-router-dom";

const FlexContainer = {
  display: "flex",
  justifyContent: "center",
}

const FooterStyle = {
  marginTop: "-60px",
  marginLeft: "5px",
  marginRight: "5px",
  color: "black",
}

const LogoImage = {
  width: "1.4em",
  height: "1.4em",
  borderRadius: "50%",
  padding: "3px",
};

const Trademark = {
  display: "flex",
  justifyContent: "center",
  marginTop: "-20px",
  fontFamily: "Comfortaa",
  fontSize:  "1em",
};

const Footer = () => (
  <footer className="footer">
    <span>
      <Link to="https://facebook.com" target="_blank">
        <img
          src={require(`../image/facebook.png`)}
          alt="Facebook Logo"
          style={LogoImage}
        />
      </Link>
    </span>
    <span>
      <Link to="https://twitter.com" target="_blank">
        <img
          src={require(`../image/twitter.png`)}
          alt="Twitter Logo"
          style={LogoImage}
        />
      </Link>
    </span>
    <div>
    <span>
      <Link to="https://web.whatsapp.com" target="_blank">
        <img
          src={require(`../image/whats-app.png`)}
          alt="WhatsApp Logo"
          style={LogoImage}
        />
      </Link>
    </span>
    <span>
      <Link to="https://instagram.com" target="_blank">
        <img
          src={require(`../image/instagram.png`)}
          alt="Instagram Logo"
          style={LogoImage}
        />
      </Link>
    </span>
    </div>

    <div style={FlexContainer}>
      <div>
        <Link to="#">
          <h5 style={FooterStyle}>Our's Team</h5>
        </Link>
      </div>

      <div>
          <h5 style={FooterStyle}> || </h5>
      </div>

      <div>
        <Link to="/tech">
        <h5 style={FooterStyle}>Tech Stack</h5>
        </Link>
      </div>
    </div>

    <span>
      <p style={Trademark}>2018 &copy; Foodbook</p>
    </span>
  </footer>
);

export default Footer;

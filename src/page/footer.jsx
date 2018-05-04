import React from 'react';
import { Link } from 'react-router-dom'


const ContainerDiv = {
    borderTop: "solid black 2px",
    padding: "25px",
}

const LogoImage = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    padding: "3px",
}

const Trademark = {
    display: "flex",
    justifyContent: "center",
    marginTop: "-30px",
    fontFamily: "Comfortaa",
}

const Footer = () => (
  <div style={ContainerDiv}>
    <footer>
      <span>
      <Link to="https://www.facebook.com" target="_blank">
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
      <span>
      <Link to="https://web.whatsapp.com/" target="_blank">
      <img
        src={require(`../image/whats-app.png`)}
        alt="WhatsApp Logo"
        style={LogoImage}
      />
      </Link>
      </span>
      <span>
      <Link to="https://www.instagram.com/" target="_blank">
      <img
        src={require(`../image/instagram.png`)}
        alt="Instagram Logo"
        style={LogoImage}
      />
      </Link>
      </span>
      <span>
      <p style={Trademark}>&copy; Copyright. All rights reserved.</p>
      </span>
    </footer>
  </div>
)

export default Footer;

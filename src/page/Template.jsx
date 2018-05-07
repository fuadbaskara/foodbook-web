import React from "react";

import Header from "../small/Header";
import Footer from "../small/Footer";

const Template = props => (
  <div className="app">
    <Header />

    <div className="app-content">{props.children}</div>

    <Footer />
  </div>
);

export default Template;

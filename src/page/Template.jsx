import React from "react";

import Header from "../small/Header";
import Footer from "../small/Footer";

const Template = props => (
  <div className="height">
    <Header />

    {props.children}

    <Footer />
  </div>
);

export default Template;

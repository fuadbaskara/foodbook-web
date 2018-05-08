import React, { Component } from "react";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h4>{this.props.name}</h4>
          <b>{`Rating: ${this.props.rating}`}</b>
          <div>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

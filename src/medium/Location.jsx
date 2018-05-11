import React from "react";

export default class Locations extends React.Component {
  render() {
    return (
      <div className="container pt-4">
        {this.props.city && this.props.street && this.props.detailLocation ? (
          <div>
            <h4>Location</h4>
            <p>{`Location: ${this.props.city}, ${this.props.street}`}</p>
            <p>{`Detail Location: ${this.props.detailLocation}`}</p>
          </div>
        ) : (
          <div>
            <h1 className="center">wait</h1>
          </div>
        )}
      </div>
    );
  }
}

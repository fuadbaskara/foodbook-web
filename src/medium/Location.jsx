import React from "react";

export default class Locations extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h4>Location</h4>
          <p>{`Location: ${this.props.city}, ${this.props.street}`}</p>
          <p>{`Coordinate: ${this.props.latitude}, ${this.props.longitude}`}</p>
        </div>
      </div>
    );
  }
}

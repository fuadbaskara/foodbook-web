import React from "react";

export default class Overview extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h4>{this.props.name}</h4>
          <div>
            <p>{this.props.overview}</p>
          </div>
          <div>
            <b>
              <p>{`Start From: Rp.${this.props.price}`}</p>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

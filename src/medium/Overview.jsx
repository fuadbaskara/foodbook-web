import React from "react";

export default class Overview extends React.Component {
  render() {
    return (
      <div>
        <div className="container pt-4">
          <h4>{this.props.name}</h4>
          <div>
            <p>{this.props.overview}</p>
          </div>
          <div>
            <b>
              <p>{`Price Range: Rp.${this.props.minPrice} - Rp.${
                this.props.maxPrice
              }`}</p>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

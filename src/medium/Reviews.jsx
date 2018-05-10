import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: []
    };
  }

  render() {
    return (
      <div className="container pt-4">
        {window.localStorage.token ? (
          <div className="container pb-cmnt-container">
            <div className="row">
              <div className="col-md-9 offset-md-3">
                <div className="card card-info">
                  <div className="card-block">
                    <textarea
                      placeholder="Write your review here!"
                      className="pb-cmnt-textarea"
                    />
                    <form className="form-inline d-flex justify-content-end">
                      <button
                        className="btn btn-primary float-xs-right col-md-3 m-2"
                        type="button"
                        onClick={this.postReview}
                      >
                        Post
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div> </div>
        )}
        <div>
          <Link to="">
            <div className="mb-3">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <img className="avatar mr-3" src="" alt="avatar" />
                    <div>
                      <CardTitle className="mb-1">Fuad</CardTitle>
                      <CardSubtitle className="text-muted">
                        <small>12:00</small>
                      </CardSubtitle>
                    </div>
                  </div>
                  <hr />
                  <div className="text-justify">
                    kjsdhkjadnkjadkjasj ljasndjk bakjls baljsbakjslfb kj kja aks
                    fa
                  </div>
                </CardBody>
              </Card>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

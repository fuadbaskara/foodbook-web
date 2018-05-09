import "../App.css";
import React from "react";

export default class Reviews extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        />
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
                    <div className="btn-group m-2">
                      <button className="btn" type="button">
                        <span className="fa fa-paperclip fa-lg" />
                      </button>
                    </div>
                    <button
                      className="btn btn-primary float-xs-right col-md-3 m-2"
                      type="button"
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

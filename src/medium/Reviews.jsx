import React from "react";

export default class Reviews extends React.Component {
  render() {
    return (
      <div>
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

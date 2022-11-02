import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { content } = this.props;

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img src={content?.image} alt="shoe" height={450} />
            </div>
            <div className="modal-body">
              <h5 className="modal-title" id="exampleModalLabel">
                {content?.name}
              </h5>
              <p>{content?.shortDescription}</p>
              <p>${content?.price}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

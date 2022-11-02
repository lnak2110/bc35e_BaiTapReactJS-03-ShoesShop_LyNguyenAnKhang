import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="col-4 mt-4">
        <div className="card">
          <img
            src={item.image}
            alt="shoe"
            className="card-img-top"
            height={450}
          />
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-dark"
              onClick={() => setStateModal(item)}
            >
              <span>Add to cart </span>
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

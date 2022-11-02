import React, { Component } from 'react';
import products from '../data.json';
import Modal from './Modal';
import ProductList from './ProductList';

export default class ShoesStore extends Component {
  state = {
    productDetail: null,
  };

  setStateModal = (product) => {
    this.setState({ productDetail: product });
  };

  render() {
    return (
      <div className="container">
        <ProductList
          productsData={products}
          setStateModal={this.setStateModal}
        />
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}

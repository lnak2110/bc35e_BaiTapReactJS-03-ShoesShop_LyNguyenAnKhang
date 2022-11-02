import React, { Component } from 'react';
import Header from './components/Header';
import ShoesStore from './components/ShoesStore';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ShoesStore />;
      </>
    );
  }
}

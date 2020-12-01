import React, { Component } from "react";

export default class Keranjang extends Component {
  render() {
    return (
      <div className="d-flex bd-highlight container shadow p-3 mb-5 bg-white rounded">
        <div className="p-2 flex-grow-1 bd-highlight">
          <h1><i className="fas fa-shopping-cart"></i>Total Item : {this.props.totalItem}</h1>
        </div>
        <div class="p-2 bd-highlight align-self-center">
          <h1>Total Harga : {this.props.totalPrice} </h1>
        </div>
      </div>
    );
  }
}

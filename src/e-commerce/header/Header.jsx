import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div class="d-flex bd-highlight container shadow p-3 mb-5 bg-white rounded">
      <div class="p-2 flex-grow-1 bd-highlight">
        <h1>Toko Barang Barang Mewah</h1>
      </div>
      <div class="p-2 bd-highlight align-self-center">
        <a href="#">Home</a>
        <a href="#">Daftar Barang</a>
        <a href="#">Disount Harga</a>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const CardBeli = ({ productBeli,deleteProductBeli}) => {
  return (
    <div className="container text-center">
      <div className="row  text-center">
        {productBeli.map((listProductBeli) => {
          return (
            <div key={listProductBeli.id} className="col-md-3 my-4 container shadow p-3 mb-5 bg-white rounded">
              <div className="card">
                <img src={listProductBeli.image} alt="" />
                <div className="card-body">
                  <h3>{listProductBeli.title}</h3>
                  <p>{listProductBeli.description}</p>
                  <h3>{listProductBeli.category}</h3>
                  <h3>{listProductBeli.price}</h3>
                </div>
                <button className="btn btn-warning" onClick={() => deleteProductBeli(listProductBeli.id) }>-</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBeli;

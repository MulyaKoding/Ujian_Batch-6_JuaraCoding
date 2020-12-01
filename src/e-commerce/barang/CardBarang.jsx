import React from "react";
import "./CardBarang.css";
const CardBarang = ({ productBarang, btnBeli }) => {
  return (
    <div className="container">
      <div className="row  text-center">
        {productBarang.map((listProduct) => {
          return (
            <div
              key={listProduct.id}
              className="col-md-3 my-4 container shadow p-3 mb-5 bg-white rounded"
            >
              <div className="card">
                <img src={listProduct.image} alt="" />
                <div className="card-body">
                  <h3>{listProduct.title}</h3>
                  <p>{listProduct.description}</p>
                  <h3>{listProduct.category}</h3>
                  <h3>{listProduct.price}</h3>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      btnBeli(
                        listProduct.id,
                        listProduct.image,
                        listProduct.title,
                        listProduct.description,
                        listProduct.category,
                        listProduct.price
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBarang;

import React from "react";

const ItemsProducts = ({ items, handleClick }) => {
  return (
    <React.Fragment>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-head">
          <div className="cardImg">
            <img src={items.image} className="card-img-top h-25" alt="..." />
          </div>
        </div>
        <div className="card-body">
          <div className="nameprice">
            <h5>{items.name}</h5>
            <h5>{items.price}</h5>
            <small>{items.quantity}</small>
            <button onClick={() => handleClick(items)}>{items.add}</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemsProducts;

import React from "react";
import data from "./dataSet";
import "../Product/Product.css";
import Carts from "../Carts/Carts";
import Store from "../Store/Store";
import { useLocation } from "react-router-dom";

const Product = ({ cart, setCart }) => {
  const location = useLocation();

  const addToCart = (items) => {
    setCart([...cart, { ...items }]);
  };

  return (
    <React.Fragment>
      <div className="products">
        <h4>Products in Our Store</h4>

        <div className="container mt-5">
          {location.pathname === "/" && (
            <Store data={data} addToCart={addToCart} />
          )}
          {location.pathname === "/cart" && (
            <Carts cart={cart} setCart={setCart} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;

import React, { useState } from "react";
import data from "./dataSet";
import "../Product/Product.css";
import Carts from "../Carts/Carts";
import Store from "../Store/Store";

const PAGE_PRODUCT = "product";
const PAGE_CART = "cart";
const Product = ({ cart, setCart }) => {
  const [page, setPage] = useState(PAGE_PRODUCT);

  const addToCart = (items) => {
    setCart([...cart, { ...items }]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const handleRemove = (items) => {
    setCart(cart.filter((product) => product.id !== items.id));
  };

  return (
    <React.Fragment>
      <div className="products">
        <h4>Products in Our Store</h4>
        <div className="product__Cart">
          <button onClick={() => navigateTo(PAGE_CART)}>Go to cart</button>
          <button onClick={() => navigateTo(PAGE_PRODUCT)}>
            View Products
          </button>
        </div>

        <div className="container mt-5">
          {page === PAGE_PRODUCT && <Store data={data} addToCart={addToCart} />}
          {page === PAGE_CART && (
            <Carts cart={cart} handleRemove={handleRemove} setCart={setCart} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;

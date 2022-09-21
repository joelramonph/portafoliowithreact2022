import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__browser">
        <div className="product__circle"></div>
        <div className="product__circle"></div>
        <div className="product__circle"></div>
      </div>
      <a href="" target="_blank" rel="noreferrer">
        <img src="" alt="" className="product__img"/>
      </a>
    </div>
  );
};

export default Product;

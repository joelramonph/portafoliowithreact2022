import React from "react";
import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="product">
      <div className="product__browser">
        <div className="product__circle"></div>
        <div className="product__circle"></div>
        <div className="product__circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="product__img"/>
      </a>
    </div>
  );
};

export default Product;

import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl__texts">
        <h1 className="pl__title">Proyectos</h1>
        <p className="pl__desc">
          Estos son algunos proyectos que he realizado como desarrollador web.
          <br></br> Te invito a mirarlos.
        </p>
      </div>

      <div className="pl__list">
        {products?.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

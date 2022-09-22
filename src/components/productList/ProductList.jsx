import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl__texts">
          <h1 className="pl__title">Create & Inspire. Its</h1>
          <p className="pl__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis delectus accusantium deleniti,
             vitae quibusdam fugit pariatur consequatur debitis voluptates.
          </p>
        </div>

        <div className="pl__list">
        {products?.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>

        ))}
          
        </div>
    </div>
  )
}

export default ProductList
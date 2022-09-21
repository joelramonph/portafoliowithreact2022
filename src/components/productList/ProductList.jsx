import React from 'react'
import "./productList.css"
import Product from "../product/Product"

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
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
    </div>
  )
}

export default ProductList
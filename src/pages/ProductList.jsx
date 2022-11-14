import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      console.log(data);
    }
    getProducts();
  }, [setProducts])
  console.log(products)

  if (!products) {
    return <p className='error'>Something went wrong!</p>
  }

  return (
    <div className='products'>
      <div className="products__container max__container">
        {
          products.map((product) => (
            <div key={product.id} className="product">
              <div className="product__img">
                <img src={product.image} alt={product.title} />  
              </div>
              <div className="product__descp">
                <h3 className="title">{product.title}</h3>
                <p>Ratings: <span>{product.rating.rate}</span></p>
                <div className="product__more">
                <h4 className='product__price'>Price: ${product.price}</h4>
                  <Link className='link' to={`/products/product/${product.id}`}>See More</Link>
                </div>
              </div>
            </div>
          ))  
        }
      </div>
    </div>
  )
}

export default ProductList;
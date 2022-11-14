import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api/api';

const ProductItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({})
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchDataId = async () => {
      const products = await fetchProducts()
      const filterItem = products.find((product) => (
        product.id == id
      ))
      setItem(filterItem)
    }; 
    fetchDataId()
  }, [item])
  
  

  return (
    <div className="item">
      <div className="item__container max__container">
        <div className="item__img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="item__info">
          <h2>{item.category}</h2>
          <h1>{item.title}</h1>
          <p className='descp'>{item.description}</p>
          <div className="price">${item.price}</div>
          <div className="item__add">
            <div className="item__counter">
              <button onClick={() => setCount(count - 1)}>-</button>
              <p>{ count }</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className='cta__cart'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
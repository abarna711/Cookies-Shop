import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cartAction';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return (
    <div className='product pt-5 mt-3 ps-5 mb-4'>
      <h1 className='product-text mt-5 text-center pt-2 pb-5'>Products</h1>
      <ul className="product-list ms-5 ps-5">
        {products.map(product => (
          <li key={product.id} className="card product-card ms-5" style={{width: "18rem"}}>
            <div className='row'>
            <div className="product-item ">
              <img src={product.image} alt={product.name} className="card-img-top" style={{width:"100%"}} />
              <div className="product-details ms-5 mt-2">
                <span className="product-name  ">{product.name}</span><br />
                <span className="product-price ">₹{product.price}</span><br />
                <button className='btn   mt-3 mb-2'style={{width:"70%"}} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div> 
    
  );
}

export default Product;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../action/cartAction'; 
import '../App.css';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [successMessage, setSuccessMessage] = useState('');
  const [isCheckout, setIsCheckout] = useState(false);

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  }

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  }

  const calculateProductTotal = (item) => {
    return item.price * item.quantity;
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  const handleRemoveFromCart = (productId, productName) => {
    if (window.confirm(`Are you sure you want to remove ${productName} from your cart?`)) {
      dispatch(removeFromCart(productId));
      const message = `${productName} has been removed from your cart.`;
      setSuccessMessage(message);
      setTimeout(() => {
        setSuccessMessage('');
      }, 10);
    }
  }

  return (
    <div className='container'>
      <div className='cart mt-5 pt-5 ps-5 ms-5 mb-5 text-center'>
        <h1>Cart</h1>
        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}
        <ul className="cart-list mb-5 ms-5 ps-5">
          {cart.map(item => (
            <li key={item.id} className="card cart-item ms-5 mb-5" style={{ display: 'flex', width: '40rem' }}>
              <div className='row d-flex'>
                <div className="col cart-item-content">
                  <img src={item.image} alt={item.name} className="cart-image mt-3 mb-3" />
                </div>  
                <div className="col cart-details mt-2">
                  <span className="cart-name">{item.name}</span><br/>
                  <span className="cart-price">{item.quantity}</span>
                  <button className='me-2 ms-2 mt-3 mb-3' onClick={() => handleIncrement(item.id)}>+</button>
                  <button className='' onClick={() => handleDecrement(item.id)}>-</button>
                  <div className="cart-total">₹{calculateProductTotal(item)}</div>
                  <button className='btn remove-btn mt2 mb-2' onClick={() => handleRemoveFromCart(item.id, item.name)}>Remove from Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h2>Total: ₹{calculateTotal()}</h2>
        {isCheckout ? (
          <div className="alert alert-success mt-2">Your order has been successfully placed!</div>
        ) : (
          <button onClick={() => setIsCheckout(true)} className='ps-4 pt-2 pb-2 pe-4'>Checkout</button>
        )}
        {isCheckout ? (
          <button>
            <Link to="/product" className='link btn '>
              Continue Shopping
            </Link>
          </button>
        ) : null}
      </div>
    </div>  
  );
}

export default Cart;

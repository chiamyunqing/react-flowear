import './checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
    const { cartItems, total } = useContext(CartContext);
  
    return (
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
      </div>
    );
  };
  
  export default Checkout;
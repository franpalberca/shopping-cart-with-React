import { useContext } from 'react';
import db from '../../assets/db/db.json'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './cart-item';

export const CartPage = () => {

  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {db.Products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product}/>
        }
      })}
      </div>
      <div className="checkout">
        <p>Dybtotal: </p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      </div>
  )
}
import { useContext } from "react";
import { Product } from "../../Types/Products";
import './cart.css'
import { CartContext } from "../../context/CartContext";

export const CartItem = (props:Product) => {
    const { items } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

  return (
    <div className="cart-item">
        <img src={items.img} />
        <div className="description">
            <p><b>{items.nameProduct}</b></p>
            <p>{items.price}</p>
            <div className="count-handler">
                <button onClick={removeFromCart(items.id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={addToCart(items.id)}> + </button>
            </div>
        </div>
    </div>
  )
}

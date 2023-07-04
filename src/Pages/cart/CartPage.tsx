import { useContext } from "react";
import {PRODUCTS} from '../../../db.json'
import { CartItem } from "../../Components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContext } from "../../config/context/ShopContext";
import { ShopContextValue } from "../../Types/ShopContext";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext<ShopContextValue>(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] && cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

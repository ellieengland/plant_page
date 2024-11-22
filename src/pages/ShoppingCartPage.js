import React from "react";
import CartItem from '../components/CartItem';

const ShoppingCartPage = ({ cart, updateQuantity, removeItem }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}
      <button>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCartPage;

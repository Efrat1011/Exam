import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🛒 Cart</h2>
      {state.cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {state.cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}>
                  Товарды өшіру
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Барлық бағасы:</strong> {total}</p>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Себетті тазалау</button>
        </>
      )}
    </div>
  );
}


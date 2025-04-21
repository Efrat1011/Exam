import React, { useReducer } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import CartContext from "./components/CartContext";
import './App.css'

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{state,dispatch}}>
      <h1>🛍️ Онлайн дүкен</h1>
      <ProductList />
      <Cart />
    </CartContext.Provider>
  );
}

export default App;

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Book', price: 2000 },
  { id: 2, name: 'CopyBook', price: 500 },
  { id: 3, name: 'Pen', price: 200 },
  { id: 4, name: 'SchoolBag', price: 3000 },
];

export default function ProductList() {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Өнімдер</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
              Товарды қосу
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

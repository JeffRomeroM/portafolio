import React, { useState } from 'react';
import productsData from '../api/P.json';

function ProductList() {
  const [products, setProducts] = useState(productsData);

  return (
    <div>
      <h1>Lista de productos:</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

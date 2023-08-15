import React from 'react';

const ProductsOrder = ({ order }) => {
  // Función para agrupar los productos por id y contar la cantidad
  const groupedProducts = order.reduce((groups, product) => {
    if (!groups[product.id]) {
      groups[product.id] = {
        ...product,
        quantity: 1,
      };
    } else {
      groups[product.id].quantity++;
    }
    return groups;
  }, {});

  const groupedOrder = Object.values(groupedProducts);

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {groupedOrder.map((product, index) => (
          <li key={index}>
           Cantidad: {product.quantity} - {product.name}  - Total: ${product.price * product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOrder;
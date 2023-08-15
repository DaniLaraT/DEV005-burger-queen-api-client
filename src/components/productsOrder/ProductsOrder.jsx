import React from 'react';
import "./ProductsOrder.css"; 

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
    <div className='Container-Order'>
      <div> aqui tiene que ir  input para nombre</div>
      <div className='information'>
      <h4>Cantidad</h4>
      <h4>Descripción</h4>
      <h4>Total</h4>
      </div>
      <ul className='Products-OrderCss'>
        {groupedOrder.map((product, index) => (
          <li key={index} className='product-Order'>
           <h5>{product.quantity} </h5> <h5> {product.name} </h5>  <h5>${product.price * product.quantity}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOrder;
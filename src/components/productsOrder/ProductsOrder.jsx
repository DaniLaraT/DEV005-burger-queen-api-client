import React from 'react';
import "./ProductsOrder.css"; 
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';

const ProductsOrder = ({ order, onAddToOrder }) => {
  return (
    <div className='Container-Order'>
      {/* Resto del código sin cambios */}
      <ul className='Products-OrderCss'>
        {order.map((product, index) => (
          <li key={index} className='product-Order'>
            <h5>{product.quantity}</h5> <h5>{product.name}</h5>{" "}
            <h5>${product.price * product.quantity}</h5>
            <div className='buttonmas'>
              <IncreaseButton onClick={() => onAddToOrder(product)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOrder;
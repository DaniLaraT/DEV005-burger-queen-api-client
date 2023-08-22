import React from 'react';
import "./ProductsOrder.css"; 
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';
import DecreaseButton from '../Button/Decrease-Increase/DecreaseButton';
import DeleteButton from '../Button/Decrease-Increase/DeleteButton';

const ProductsOrder = ({ order, onAddToOrder, onRemoveFromOrder, onDeleteFromOrder }) => { // Agrega la prop "onRemoveFromOrder"
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
            <div className='buttonmenos'>
              {/* Agrega el botón de disminución y su evento onClick */}
              <DecreaseButton onClick={() => onRemoveFromOrder(product)} />
            </div>
            <div className='buttoneliminar'>
              {/* Agrega el botón de eliminación y su evento onClick */}
              <DeleteButton onClick={() => onDeleteFromOrder(product)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOrder;
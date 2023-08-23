import React from 'react';
import "./ProductsOrder.css"; 
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';
import DecreaseButton from '../Button/Decrease-Increase/DecreaseButton';
import DeleteButton from '../Button/Decrease-Increase/DeleteButton';

const ProductsOrder = ({ order, onAddToOrder, onRemoveFromOrder, onDeleteFromOrder }) => { // Agrega la prop "onRemoveFromOrder"
  
  const total = order.reduce((acc, product) => acc + product.price * product.quantity, 0);

  
  return (
    <div className='Container-Order'>
      {/* Resto del código sin cambios */}
      <ul className='Products-OrderCss'>
        {order.map((product, index) => (
          <li key={index} className='product-Order'>
            <div className='increase-decrease'>
             <div className='buttonmas-small'>
              <IncreaseButton onClick={() => onAddToOrder(product)} />
            </div>
            <h5>{product.quantity}</h5>
            <div className='buttonmenos-small'>
              {/* Agrega el botón de disminución y su evento onClick */}
              <DecreaseButton onClick={() => onRemoveFromOrder(product)} />
            </div>
            </div>
             <h5>{product.name}</h5>{" "}
             <div className='Price-Delete'>
            <h5>${product.price * product.quantity}</h5>
            <div className='buttonEliminar'>
              {/* Agrega el botón de eliminación y su evento onClick */}
              <DeleteButton onClick={() => onDeleteFromOrder(product)} />
            </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='total'>
        <h3>Total del Pedido: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ProductsOrder;
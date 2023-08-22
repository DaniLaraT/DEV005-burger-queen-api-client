/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import "./ProductsOrder.css"; 
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';
import DecreaseButton from '../Button/Decrease-Increase/DecreaseButton';
import DeleteButton from '../Button/Decrease-Increase/DeleteButton';

const ProductsOrder = ({ order, onAddToOrder, onRemoveFromOrder, onDeleteFromOrder }) => {
  return (
    <div className='Container-Order'>
      {/* Rest of the code without changes */}
      <ul className='Products-OrderCss'>
        {order.map((product, index) => (
          <li key={index} className='product-Order'>
            <h5>{product.quantity}</h5> <h5>{product.name}</h5>{" "}
            <h5>${product.price * product.quantity}</h5>
            <div className='buttonmas'>
              <IncreaseButton onClick={() => onAddToOrder(product)} />
            </div>
            <div className='buttonmenos'>
              <DecreaseButton onClick={() => onRemoveFromOrder(product)} />
            </div>
            <div className='buttoneliminar'>
              <DeleteButton onClick={() => onDeleteFromOrder(product)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductsOrder.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToOrder: PropTypes.func.isRequired,
  onRemoveFromOrder: PropTypes.func.isRequired,
  onDeleteFromOrder: PropTypes.func.isRequired,
};

export default ProductsOrder;

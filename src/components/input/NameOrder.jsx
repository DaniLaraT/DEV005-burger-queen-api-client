import React from 'react';
import './NameOrder.css'

const NameOrder = ({ customerName, onCustomerNameChange }) => {
  return (
    <div className='customer-input'>
      <label htmlFor='customerName'>Nombre:</label>
      <input
      className='inputName'
        type='text'
        id='customerName'
        value={customerName}
        onChange={(e) => onCustomerNameChange(e.target.value)}
      />
    </div>
  );
};

export default NameOrder
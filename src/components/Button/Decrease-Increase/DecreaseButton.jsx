/* eslint-disable no-unused-vars */
import React from 'react';
import './IncreaseButton.css';

const DecreaseButton = ({ onClick }) => {
  return (
    <button className='ButtonDecrease-Increase' onClick={onClick}>-</button>
  );
};

export default DecreaseButton;
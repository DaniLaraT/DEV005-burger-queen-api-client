import React from 'react';
import './IncreaseButton.css';


const IncreaseButton = ({ onClick }) => {
  return (
    <button className='ButtonDecrease-Increase' onClick={onClick}>+</button>
  );
};

export default IncreaseButton;
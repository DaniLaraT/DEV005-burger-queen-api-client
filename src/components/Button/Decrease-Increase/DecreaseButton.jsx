import React from 'react';
import './IncreaseButton.css';

const DecreaseButton = ({ onClick }) => {
  return (
    <button className='DecreaseButton' onClick={onClick}>-</button>
  );
};

export default DecreaseButton;
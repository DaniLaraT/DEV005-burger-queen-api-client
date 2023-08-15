import React from 'react';
import './IncreaseButton.css';


const IncreaseButton = ({ onClick }) => {
  return (
    <button className='IncreaseButton' onClick={onClick}>+</button>
  );
};

export default IncreaseButton;
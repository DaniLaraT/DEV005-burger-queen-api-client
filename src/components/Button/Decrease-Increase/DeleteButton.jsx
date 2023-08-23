import React from 'react';
import './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button className='DeleteButton' onClick={onClick}></button>
  );
};

export default DeleteButton;
import React from 'react';
import './EditButton.css';

const EditButton = ({ onClick }) => {
  return (
    <button className='EditButton' onClick={onClick}></button>
  );
};

export default EditButton;
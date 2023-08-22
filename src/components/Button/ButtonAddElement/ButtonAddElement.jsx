/* eslint-disable no-unused-vars */
import './ButtonAddElement.css'; 
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonAddElement({ text, initialActiveButton }) {
  const [clickedButton, setClickedButton] = useState(initialActiveButton);

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  return (
    <div >
      <button className="button-add-element">
        {text}
      </button>
    </div>
  );
}

ButtonAddElement.propTypes = {
  text: PropTypes.string.isRequired,
  initialActiveButton: PropTypes.number,
};

ButtonAddElement.defaultProps = {
  initialActiveButton: 1,
};

export default ButtonAddElement;
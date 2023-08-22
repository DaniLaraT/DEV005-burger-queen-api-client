import React, { useState } from 'react';
import './ButtonView.css';

function ButtonViews({ Text1, Text2, onClickButton1, onClickButton2 }) {
  const [clickedButton, setClickedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  return (
    <div className="button-views">
      <button
        className={`button-view ${clickedButton === 1 ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick(1);
          onClickButton1(); // Llama a la función proporcionada al hacer clic en el botón 1
        }}
      >
        {Text1}
      </button>
      <button
        className={`button-view ${clickedButton === 2 ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick(2);
          onClickButton2(); // Llama a la función proporcionada al hacer clic en el botón 2
        }}
      >
        {Text2}
      </button>
    </div>
  );
}

export default ButtonViews;
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types"; // Importa la biblioteca prop-types
import "./ButtonView.css";

function Button({ id, type, text, onClick }) {
  const [currentText, setCurrentText] = useState(text);

  const handleClick = () => {
    setCurrentText("Button clicked!");
  };

  return (
    <>
<section>
        <button type="button" className={`bnBreakfast ${isBreakfast ? "selecBtn" : "unSelectBtn"}`} onClick={handleBreakfastButtonClick}>Desayunos</button>
        <button type="button" className={`btnDinner ${isDinner ? "selecBtn" : "unSelectBtn"}`} onClick={handleDinnerButtonClick}>Almuerzo/Cena</button>
      </section>
    </>
  );
}

// Define las expectativas de las propiedades (props validation)
Button.propTypes = {
  id: PropTypes.string, // Espera una prop id de tipo string
  type: PropTypes.string, // Espera una prop type de tipo string
  text: PropTypes.string, // Espera una prop text de tipo string
  onClick: PropTypes.func, // Espera una prop onClick de tipo función
};

export default Button;





/*function Button({ id, type, text, onClick }) {
  const [currentText, setCurrentText] = useState(text);

  const handleClick = () => {
    setCurrentText("Button clicked!");
  };

  return (
    <>
      <button id={id} type={type} onClick={handleClick} className="btn">
        {currentText}
      </button>
    </>
  );
}

export default Button;*/

/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import "./ModalDelete.css";
import { deleteProduct, deleteUser } from "./apiFunctions";

function ModalDelete({ onClose, text, id, optToDelete }) {
  const token = localStorage.getItem("token");
  const authorization = `Bearer ${token}`;

  const handleConfirm = () => {
    deleteItem(id);
  };

  const deleteItem = (id) => {
    const deleteFunction = optToDelete === "product" ? deleteProduct : deleteUser;
    
    deleteFunction(id, authorization)
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className='modalDelete' id="modalDelete">
      <div className='innerModalDelete'>
        <span>{text}</span>
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
}

ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  optToDelete: PropTypes.string.isRequired,
};

export default ModalDelete;

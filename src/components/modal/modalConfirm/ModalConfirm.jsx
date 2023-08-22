/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ModalConfirm = ({ selectedItem, type, setShowModalConfirm }) => {
  const token = localStorage.getItem('token');
  const nameToDelete = type === 'products' ? selectedItem.name : selectedItem.email.split('@')[0];

  const handleCancelClick = () => {
    setShowModalConfirm(false);
  };

  const handleConfirmClick = async () => {
    try {
      const response = await fetch(`http://localhost:8080/${type}/${selectedItem.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setShowModalConfirm(false);
      } else {
        // Manejar el caso en que la eliminación no sea exitosa
        console.error('Failed to delete item.');
      }
    } catch (error) {
      console.error('Error while deleting:', error);
    }
  };

  return (
    <div className="background-modal">
      <div className="modal-order">
        <span> Are you sure you want to delete <strong>{nameToDelete}</strong>?</span>
        <div className="btns-modal-confirm">
          <button className="btn-cancel" data-testid="cancel-button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button className="btn-confirm" data-testid="confirm-button" onClick={handleConfirmClick}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};


ModalConfirm.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
  setShowModalConfirm: PropTypes.func.isRequired,
};

export default ModalConfirm;

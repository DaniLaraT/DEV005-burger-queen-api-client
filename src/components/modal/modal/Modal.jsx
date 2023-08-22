import PropTypes from 'prop-types';
import './modal.css';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="background-modal">
      <div className="modal">
        <span className="close-btn" onClick={onClose}>
          &times; {/* Icono de cerrar x */}
        </span>
        <div className='content-modal'>
          {children} {/* Renderizar el contenido del modal */}
        </div>
      </div>
    </div>
  );
}


Modal.propTypes = {
  open: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired, 
};
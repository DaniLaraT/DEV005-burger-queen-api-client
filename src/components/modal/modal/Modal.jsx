import ReactModal from 'react-modal';
import { PropTypes } from 'prop-types';
import { customStyles, ContainerButtonModal } from './modalStyles';
// import styled from 'styled-components';

ReactModal.setAppElement('#root');

const CustomModal = ({ isOpen, onCloseRequest, onModalClick, modalText, modalButtonText, children }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseRequest}
      contentLabel="CustomModal"
      style={customStyles}
    >
      <h1 className='modal-text'>{modalText}</h1>
      {modalButtonText !== 'Borrar' && children}
      <ContainerButtonModal className='container-btn-modal-accept-cancel'>
        {modalButtonText === 'Borrar' && <button className='btn-accept' onClick={onModalClick}>{modalButtonText}</button>}
        <button className='btn-cancel' onClick={onCloseRequest}>Cancelar</button>
      </ContainerButtonModal>
    </ReactModal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onCloseRequest: PropTypes.func,
  children: PropTypes.object,
  onModalClick: PropTypes.func,
  modalText: PropTypes.string,
  modalButtonText: PropTypes.string
}
export default CustomModal;

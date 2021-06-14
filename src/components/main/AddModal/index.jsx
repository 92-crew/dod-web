import React from 'react';
import Modal from 'react-modal';
import CardList from '../CardList';

Modal.setAppElement("#root");

function AddModal({ isOpen, toggleModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="add todo item"
      className="modal_center"
      overlayClassName="modal_dimmed"
      closeTimeoutMS={250}
    >
      <CardList title='할일 추가' todoId='add_modal'>
        <div className='card_item'>
          <form onSubmit={() => { }}>
            <div className='item_add'>
              <button className='add_ico' type='submit'></button>
            </div>
            <div className='item_text'>
              <input type='text' value='' onChange={() => { }} />
            </div>
          </form>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </CardList>
    </Modal>
  );
}

export default AddModal;
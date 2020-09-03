import React from 'react';
import './ChatModal.scss';
import Chat from './Chat';

const ChatModal = (props) => {
  const closeModal = () => {
    props.setClickedChatModal(false);
  };

  return (
    <>
      <div className="mask" data-status={props.clickedChatModal}>
        <div className="modal">
          <div className="modal-row">
            <div className="closeModal" onClick={closeModal}>
              &times;
            </div>
          </div>
          <div className="modal-row">
            {/* <div> */}
            {/* <div className="modal-main-content">MODAL TIME</div> */}
            <Chat user={props.user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModal;

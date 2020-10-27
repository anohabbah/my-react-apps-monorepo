import React from 'react';
import ReactDOM from 'react-dom';

import history from '../../history';

/* eslint-disable-next-line */
export interface ModalProps {}

export const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => history.push('/')}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">
          Delete Stream
        </div>
        <div className="content">
          Are you sure you want to delete this stream ?
        </div>
        <div className="actions">
          <button className="ui button primary">Delete</button>
          <button className="ui button secondary">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;

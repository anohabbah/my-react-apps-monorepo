import React from 'react';
import ReactDOM from 'react-dom';

import history from '../../history';

export interface ModalProps {
  title: string;
  content: string;
  actions;
}

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
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;

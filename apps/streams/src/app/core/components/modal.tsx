import React from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
  title: string;
  content: string;
  actions;
  onDismiss;
}

export const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
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

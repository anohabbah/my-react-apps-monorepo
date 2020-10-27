import React from 'react';

import Modal from '../../core/components/modal';
import history from '../../history';

/* eslint-disable-next-line */
export interface DeleteProps {}

export const StreamDelete = (props: DeleteProps) => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button secondary">Cancel</button>
    </>
  );

  return (
    <div>
      <h1>Welcome to delete a stream page!</h1>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream ?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;

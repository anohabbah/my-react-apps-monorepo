import React from 'react';

import Modal from '../../core/components/modal';

/* eslint-disable-next-line */
export interface DeleteProps {}

export const StreamDelete = (props: DeleteProps) => {
  return (
    <div>
      <h1>Welcome to delete a stream page!</h1>
      <Modal />
    </div>
  );
};

export default StreamDelete;

import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../core/actions';
import StreamForm from '../../core/components/stream-form';

export interface CreateProps {
  createStream;
}

export class StreamCreate extends React.Component<CreateProps> {
  onSubmit = ({ title, description }) => {
    this.props.createStream({ title, description })
  };

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  {
    createStream
  }
)(StreamCreate);

import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import pick from 'lodash/pick';

import { RootState } from '../../core/reducers';
import { fetchStream, editStream } from '../../core/actions';
import StreamForm from '../../core/components/stream-form';

export interface EditProps {
  stream: { id: string, title: string, description: string, } | undefined;
  fetchStream: (id: string) => Promise<void>;
  editStream: (id: string, data: {title: string, description: string}) => Promise<void>;
  match;
}

export class StreamEdit extends React.Component<EditProps> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId);
  }

  onSubmit = (values) => {
    this.props.editStream(this.props.stream.id, values);
  }

  render() {
    if (!this.props.stream) return <span>Loading...</span>;

    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={pick(this.props.stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<Record<string, unknown>, Record<string, unknown>, RootState> =
  (state, ownProps) => {
  return { stream: state.streams[ownProps.match['params'].streamId], };
};

export default connect(
  mapStateToProps,
  {
    fetchStream,
    editStream
  }
)(StreamEdit);

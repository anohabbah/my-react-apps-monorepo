import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../../core/components/modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../core/actions';
import { RootState } from '../../core/reducers';

export interface DeleteProps {
  stream;
  match;
  fetchStream;
  deleteStream;
}

export class StreamDelete extends React.Component<DeleteProps> {
  componentDidMount() {
    this.props.fetchStream(this.props.stream.id);
  }

  renderActions() {
    const streamId: string = this.props.match.params.streamId;

    return (
      <>
        <button
          onClick={() => this.props.deleteStream(streamId)}
          className="ui button negative"
        >Delete</button>
        <Link to="/" className="ui button secondary">Cancel</Link>
      </>
    );
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream ?';
    }

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps: MapStateToProps<Record<string, unknown>, Record<string, unknown>, RootState> =
  (state, ownProps) => {
    return { stream: state.streams[ownProps.match['params'].streamId] };
  };

export default connect(
  mapStateToProps,
  {
    fetchStream,
    deleteStream
  }
)(StreamDelete);

import React from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../core/actions';
import { Link } from 'react-router-dom';

export interface IndexProps {
  streams: { id, title, description }[];
  currentUserId: string;
  isSignedIn: boolean;
  fetchStreams: () => void;
}

export class StreamsList extends React.Component<IndexProps> {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="ui right floated">
          <Link
            to={`/streams/${stream.id}/edit`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to={`/streams/${stream.id}/delete`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }

    return null;
  }

  renderList = () => {
    return this.props.streams.map(stream => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create</Link>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamsList);

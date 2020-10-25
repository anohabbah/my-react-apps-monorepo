import React from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../core/actions';

export interface IndexProps {
  streams: { id, title, description }[];
  fetchStreams;
}

export class Index extends React.Component<IndexProps> {
  renderList = () => {
    return this.props.streams.map(stream => (
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ streams: Object.values(state.streams) });

export default connect(
  mapStateToProps,
  { fetchStreams }
)(Index);

import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../../core/reducers';
import { fetchStream } from '../../core/actions';

export interface ShowProps {
  fetchStream;
  stream;
  match;
}

export class StreamShow extends React.Component<ShowProps> {
  componentDidMount() {
    const streamId: string = this.props.match.params.streamId;
    this.props.fetchStream(streamId);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    const { description, title } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
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
  { fetchStream }
)(StreamShow);

import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { RootState } from '../../core/reducers';
import { fetchStream } from '../../core/actions';

export interface EditProps {
  stream: { id: string, title: string, description: string, } | undefined;
  fetchStream: (id:  string) => void;
  match;
}

export class StreamEdit extends React.Component<EditProps> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.param.streamId);
  }

  render() {
    return (
      <div>
        <h1>Welcome to edit a stream page!</h1>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<Record<string, unknown>, Record<string, unknown>, RootState> =
  (state, ownProps) => {
  return { stream: state.streams[ownProps.match['param'].streamId], };
};

export default connect(
  mapStateToProps,
  {
    fetchStream,
  }
)(StreamEdit);

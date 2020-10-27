import React, { RefObject } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import Flv from 'flv.js';

import { RootState } from '../../core/reducers';
import { fetchStream } from '../../core/actions';

export interface ShowProps {
  fetchStream;
  stream;
  match;
}

export class StreamShow extends React.Component<ShowProps> {
  videoRef: RefObject<HTMLVideoElement>;
  flvPlayer: Flv.Player
  constructor(props: ShowProps) {
    super(props);

    this.videoRef = React.createRef<HTMLVideoElement>();
  }

  componentDidMount() {
    const streamId: string = this.props.match.params.streamId;

    this.props.fetchStream(streamId);
    this.buildPlayer();
  }

  componentDidUpdate(
    prevProps: Readonly<ShowProps>,
    prevState: Readonly<unknown>,
    snapshot?: unknown
  ) {
    this.buildPlayer();
  }

  buildPlayer = () => {
    if (this.flvPlayer || !this.props.stream) return;

    this.flvPlayer = Flv.createPlayer({
      type: 'flv',
      url: `http://localhost:4400/live/${this.props.stream.id}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
    // this.flvPlayer.play();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    const { description, title } = this.props.stream;
    return (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: '100%' }}
          controls
        />
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

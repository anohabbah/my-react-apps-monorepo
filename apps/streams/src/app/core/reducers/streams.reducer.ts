import { AnyAction, Reducer } from 'redux';
import { StreamActions } from '../actions';
import omit from 'lodash/omit';
import mapKeys from 'lodash/mapKeys';

const streamsReducer: Reducer<Record<string, unknown>> =
  (state = {}, action: AnyAction) => {
    const payload = action['payload'];

    switch (action.type) {
      case StreamActions.FETCH_STREAMS:
        return { ...state, ...mapKeys(payload, 'id') };

      case StreamActions.FETCH_STREAM:
      case StreamActions.CREATE_STREAM:
      case StreamActions.EDIT_STREAM:
        return { ...state, [payload.id]: payload };

      case StreamActions.DELETE_STREAM:
        return omit(state, payload);

      default:
        return state;
    }
  };

export default streamsReducer;

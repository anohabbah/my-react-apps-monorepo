import { Action, ActionCreator, AnyAction } from 'redux';
import streams from '../apis/streams.api';
import { ThunkDispatch } from 'redux-thunk';
import history from '../../history';

export enum AuthActions {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export enum StreamActions {
  EDIT_STREAM = 'EDIT_STREAM',
  FETCH_STREAM = 'FETCH_STREAM',
  CREATE_STREAM = 'CREATE_STREAM',
  FETCH_STREAMS = 'FETCH_STREAMS',
  DELETE_STREAM = 'DELETE_STREAM',
}

export const signIn: ActionCreator<AnyAction> = (userId) => ({
  type: AuthActions.SIGN_IN,
  payload: userId
});

export const signOut: ActionCreator<Action<AuthActions>> = () => ({
  type: AuthActions.SIGN_OUT
});

export const createStream =
  ({ title, description }) =>
    async (
      dispatch: ThunkDispatch<undefined, undefined, AnyAction>,
      getState
    ) => {
      const { userId } = getState().auth;

      const { data } = await streams.post(
        '/streams',
        { title, description, userId }
      );

      dispatch({
        type: StreamActions.CREATE_STREAM,
        payload: data
      });

      history.push('/')
    };

export const fetchStreams: ThunkDispatch<unknown, unknown, AnyAction> = () =>
  async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    const { data } = await streams.get('/streams');

    dispatch({ type: StreamActions.FETCH_STREAMS, payload: data });
  };

export const fetchStream = (streamId: string) =>
  async (dispatch: ThunkDispatch<undefined, undefined, AnyAction>) => {
    const { data } = await streams.get(`/streams/${streamId}`);

    dispatch({ type: StreamActions.FETCH_STREAM, payload: data });
  };

export const editStream = (streamId: string, { title, description }) =>
  async (dispatch: ThunkDispatch<undefined, undefined, AnyAction>) => {
    const { data } = await streams.patch(`/streams/${streamId}`, {
      title,
      description
    });

    dispatch({ type: StreamActions.EDIT_STREAM, payload: data });

    history.push('/');
  };

export const deleteStream = (streamId: string) =>
  async (dispatch: ThunkDispatch<undefined, undefined, AnyAction>) => {
    await streams.delete(`/streams/${streamId}`);

    dispatch({ type: StreamActions.DELETE_STREAM, payload: streamId });
  };

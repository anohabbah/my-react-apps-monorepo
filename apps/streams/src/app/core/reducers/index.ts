import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer, { AuthState } from './auth.reducer';
import streamsReducer, { StreamsState } from './streams.reducer';

export type RootState = AuthState & StreamsState;

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});

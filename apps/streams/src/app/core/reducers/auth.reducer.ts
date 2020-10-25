import { Action, Reducer } from 'redux';

import { AuthActions } from '../actions';

interface AuthState {
  isSignedIn: boolean;
}

const INITIAL_STATE: AuthState = {
  isSignedIn: null,
}

const authReducer: Reducer<AuthState, Action<AuthActions>> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActions.SIGN_IN:
      return { ...state, isSignedIn: true, }
    case AuthActions.SIGN_OUT:
      return { ...state, isSignedIn: false, }
    default:
      return state;
  }
}

export default authReducer;

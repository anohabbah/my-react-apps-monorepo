import { Action, Reducer } from 'redux';

import { AuthActions } from '../actions';

interface AuthState {
  isSignedIn: boolean;
  userId: string;
}

const INITIAL_STATE: AuthState = {
  isSignedIn: null,
  userId: null,
}

const authReducer: Reducer<AuthState, Action<AuthActions>> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActions.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action['payload'], }
    case AuthActions.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, }
    default:
      return state;
  }
}

export default authReducer;

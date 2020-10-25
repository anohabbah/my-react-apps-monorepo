import { Action, ActionCreator } from 'redux';

export enum AuthActions {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export const signIn: ActionCreator<Action<AuthActions>> = () => ({
  type: AuthActions.SIGN_IN,
});

export const signOut: ActionCreator<Action<AuthActions>> = () => ({
  type: AuthActions.SIGN_OUT,
});

import { Action, ActionCreator, AnyAction } from 'redux';

export enum AuthActions {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export const signIn: ActionCreator<AnyAction> = (userId) => ({
  type: AuthActions.SIGN_IN,
  payload: userId
});

export const signOut: ActionCreator<Action<AuthActions>> = () => ({
  type: AuthActions.SIGN_OUT,
});

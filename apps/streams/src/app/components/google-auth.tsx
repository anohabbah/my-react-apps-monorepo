import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AuthActions, signIn, signOut } from '../core/actions';
import { Action, ActionCreator } from 'redux';

export interface GoogleAuthProps {
  isSignedIn: boolean;
  signIn: ActionCreator<Action<AuthActions>>;
  signOut: ActionCreator<Action<AuthActions>>;
}

export class GoogleAuth extends Component<GoogleAuthProps> {
  private auth: Record<string, unknown>;

  componentDidMount() {
    window['gapi'].load('client:auth2', () => {
      window['gapi'].client
        .init({
          clientId: '52209567527-eu3b99unl2i0p5qbsk8t3emuces0iud0.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window['gapi'].auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn['get']());
          this.auth.isSignedIn['listen'](this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser['get']().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn['apply'](this.auth);
  };

  onSignOut = () => {
    this.auth.signOut['apply'](this.auth);
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOut}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          onClick={this.onSignIn}
          className="ui red google button"
        >
          <i className="google icon" />
          Sing In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

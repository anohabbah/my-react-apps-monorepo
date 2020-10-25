import React, { Component } from 'react';
import { button } from '@storybook/addon-knobs';

/* eslint-disable-next-line */
export interface GoogleAuthProps {
}

export class GoogleAuth extends Component<GoogleAuthProps> {
  readonly state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn['get']() });
          this.auth.isSignedIn['listen'](this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn['get']() });
  };

  onSignIn = () => {
    this.auth.signIn['apply'](this.auth);
  };

  onSignOut = () => {
    this.auth.signOut['apply'](this.auth);
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default GoogleAuth;

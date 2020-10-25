import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './google-auth';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  console.log(props);
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>

      <div className="right menu">
        <Link to="/">All Streams</Link>

        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;

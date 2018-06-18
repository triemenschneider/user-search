import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <Link to="/" onClick={props.unRedirect}>
      <img src={logo} alt="logo" />
    </Link>
  </div>
);

export default Header;

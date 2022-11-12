import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/pages.css';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header id="header" className="text-dark flex-row">
      <div id="title" className="flex-row align-center justify-center">
        <div>
          <Link className="text-dark" to="/">
            <h1 className="name-tag m-0">COMMUNITY VISION</h1>
          </Link>
          <p className="name-tag m-0">Projects with Community Input</p>
        </div>
        <div id="auth-btns">
          {Auth.loggedIn() ? (
            <>
              <Link className="main-btn btn btn-sm btn-info m-3" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="main-btn btn btn-sm btn-primary m-3" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="main-btn btn btn-sm btn-primary btn-border-1 m-3" to="/login">
                Login
              </Link>
              <Link className="main-btn btn btn-sm btn-secondary btn-border-1 m-3" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

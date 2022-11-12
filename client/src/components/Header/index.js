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
    <header id="header" className="text-dark flex-row align-center">
      <div id="title" className="container flex-row justify-space-around-lg justify-center align-center m-auto">
        <div>
          <Link className="text-dark" to="/">
            <h1 className="m-0">COMMUNITY VISION</h1>
          </Link>
          <p className="m-0">Projects with Community Input</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-primary m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary btn-border-1 m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-secondary btn-border-1 m-2" to="/signup">
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

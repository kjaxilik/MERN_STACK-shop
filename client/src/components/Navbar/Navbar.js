import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/userActions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(event) {
    event.preventDefault();

    this.props.logout(this.props.history);
  }

  render() {
    const { isAuth, user } = this.props.user;

    const offlineLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/registration" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const onlineLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/profile" className="nav-link">
            {user.login}
          </Link>
        </li>
        <li className="nav-item active">
          <a onClick={this.onLogoutClick} href="/" className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          {isAuth ? onlineLinks : offlineLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/userActions';
import '../../css/style.css';
import '../../css/core-style.css';

const Clear = {
  width: `100%`,
  height: `90px`
};

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
      <React.Fragment>
        {/* <!-- User Login Info -->*/}
        <div className="user-login-info">
          <Link to="/login">Login</Link>
        </div>
        <div className="user-login-info">
          <Link to="/registration">Register</Link>
        </div>
        {/* <!-- Favourite Area -->*/}
        <div className="favourite-area">
          <Link to="/">
            <img src="../images/core-img/heart.svg" alt="" />
          </Link>
        </div>
        {/* <!-- Cart Area -->*/}
        {/*<div className="cart-area">
          <Link to="/" id="essenceCartBtn">
            <img src="../images/core-img/bag.svg" alt="" /> <span>3</span>
          </Link>
          </div>*/}
      </React.Fragment>
    );

    const onlineLinks = (
      <React.Fragment>
        {/* <!-- User Login Info -->*/}
        <div className="user-login-info">
          <Link to="/profile">{user.login}</Link>
        </div>
        <div className="user-login-info">
          <Link to="/profile">
            <img src="../images/core-img/user.svg" alt="" />
          </Link>
        </div>

        {/* <!-- Favourite Area -->*/}
        {/*<div className="favourite-area">
          <Link to="/">
            <img src="../images/core-img/heart.svg" alt="" />
          </Link>
        </div>
        {/* <!-- Cart Area -->*/}
        {/*<div className="cart-area">
          <Link to="/" id="essenceCartBtn">
            <img src="../images/core-img/bag.svg" alt="" /> <span>3</span>
          </Link>
        </div>
        {/* <!-- Logout -->*/}
        <div className="user-login-info">
          <Link onClick={this.onLogoutClick} to="/">
            Logout
          </Link>
        </div>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <header className="header_area">
          <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
            {/* <!-- Classy Menu -->*/}
            <nav className="classy-navbar" id="essenceNav">
              {/* <!-- Logo -->*/}
              <Link className="nav-brand" to="/">
                <img src="/images/core-img/logo.png" alt="" />
              </Link>
              {/* <!-- Navbar Toggler -->*/}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              {/* <!-- Menu -->*/}
              <div className="classy-menu">
                {/* <!-- Nav Start -->*/}
                <div className="classynav">
                  <ul>
                    <li>
                      <Link to="/products">Shop</Link>
                    </li>
                    <li>
                      <Link to="/products/add">Add Product</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Nav End -->*/}
              </div>
            </nav>
            {/* END LEFT SIDE MENU */}

            {/* <!-- Header Meta Data -->*/}
            <div className="header-meta d-flex clearfix justify-content-end">
              {/* <!-- Search Area -->*/}
              <div className="search-area">
                <form action="#" method="post">
                  <input
                    type="search"
                    name="search"
                    id="headerSearch"
                    placeholder="Type for search"
                  />
                  <button type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
              {isAuth ? onlineLinks : offlineLinks}
            </div>
          </div>
        </header>
        <div style={Clear} />
      </React.Fragment>
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

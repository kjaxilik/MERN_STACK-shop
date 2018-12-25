import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserContainer from './containers/UserContainer';

import store from './store';

import { getUserById } from './actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);

    var { cookies } = this.props;
    if (cookies.get('user')) {
      store.dispatch({
        type: 'AUTH_USER',
        isAuth: true
      });

      store.dispatch(getUserById(cookies.get('user')));
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/profile" component={UserContainer} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(App);

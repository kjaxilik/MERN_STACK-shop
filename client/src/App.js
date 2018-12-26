import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
//import UserContainer from './components/profile/ProfileContainer';
import NotFound from './components/common/NotFound';
import PrivateRoute from './components/common/PrivateRoute';

import store from './store';

import { getUserById } from './actions/userActions';
import ProfileContainer from './components/profile/ProfileContainer';
import ProfileEdit from './components/profile/ProfileEdit';

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

            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              {/*если юзер залогинился PrivateRoute*/}
              <PrivateRoute exact path="/profile" component={ProfileContainer} />
              <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />

              <Route component={NotFound} />
            </Switch>
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

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

import ProductContainer from './components/products/ProductsContainer';
import ProductAdd from './components/products/ProductAdd';
import ProductSingle from './components/products/ProductSingle';
import HomePage from './components/products/HomePage';

import Footer from './components/footer/footerContainer';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

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
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/products" component={ProductContainer} />
              {/*если юзер залогинился PrivateRoute*/}
              <PrivateRoute exact path="/products/add" component={ProductAdd} />
              <PrivateRoute exact path="/profile" component={ProfileContainer} />
              <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />

              <Route exact path="/products/:id" component={ProductSingle} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
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

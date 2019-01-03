import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Main from './components/MainPage/MainPage';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
//import UserContainer from './components/profile/ProfileContainer';
import NotFound from './components/common/NotFound';
import PrivateRoute from './components/common/PrivateRoute';

import store from './store';

import { getUserById } from './actions/userActions';
import ProfileContainer from './components/profile/ProfileContainer';
import ProfileEdit from './components/profile/ProfileEdit';

//ProductContainer import

import ProductContainer from './components/products/ProductsContainer';
import ProductAdd from './components/products/ProductAdd';
import ProductSingle from './components/products/ProductSingle';

import Footer from './components/footer/footerContainer';
// import bootstrap
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
    /*
    var { product } = store.product;
    console.log(store.product);

    if (product) {
      store.dispatch({
        type: 'ADD_PRODUCT',
        isAdded: true
      });
    }*/
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/products" component={ProductContainer} />
              <Route exact path="/products/single" component={ProductSingle} />
              <Route exact path="/products/add" component={ProductAdd} />
              {/*если юзер залогинился PrivateRoute*/}
              <PrivateRoute exact path="/profile" component={ProfileContainer} />
              <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />

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

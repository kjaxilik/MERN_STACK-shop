import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import productReducer from './productReducer';
import favouriteReducer from './favouritesReducer';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  favourites: favouriteReducer,
  errors: errorReducer
});

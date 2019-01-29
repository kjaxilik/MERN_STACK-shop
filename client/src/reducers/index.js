import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import productReducer from './productReducer';
import favouriteReducer from './favouritesReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  favourites: favouriteReducer,
  categories: categoryReducer,
  errors: errorReducer
});

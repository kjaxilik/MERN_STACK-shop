import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import productReducer from './productReducer';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  errors: errorReducer
});

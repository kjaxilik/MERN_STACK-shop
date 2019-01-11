import axios from 'axios';

export const addProduct = data => dispatch => {
  axios
    .post('/api/product/add', data)
    .then(res => {
      dispatch({
        type: 'ADD_PRODUCT',
        product: res.data
      });

      dispatch({
        type: 'GET_ERRORS',
        errors: {}
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
      console.log(err);
    });
};

export const getProducts = () => dispatch => {
  axios
    .get('/api/product/')
    .then(res => {
      dispatch({
        type: 'GET_PRODUCTS',
        products: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};
export const getProductById = id => dispatch => {
  axios
    .get('/api/product/' + id)
    .then(res => {
      dispatch({
        type: 'CURRENT_PRODUCT',
        product: res.data
      });
      dispatch({
        type: 'GET_ERRORS',
        errors: {}
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

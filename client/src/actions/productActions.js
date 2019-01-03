import axios from 'axios';

export const addProduct = (data, history) => dispatch => {
  axios
    .post('/api/product/add', data)
    .then(res => {
      dispatch({
        type: 'ADD_PRODUCT',
        isAdded: true
      });

      dispatch({
        type: 'GET_ERRORS',
        errors: {}
      });

      history.push('/products');
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
        type: 'GET_PRODUCT',
        product: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

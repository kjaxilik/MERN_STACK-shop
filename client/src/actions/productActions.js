import axios from 'axios';

export const addProduct = (data, history) => dispatch => {
  axios
    .post('/api/product/add', data)
    .then(res => {
      dispatch({
        type: 'ADD_PRODUCT',
        isAdded: true,
        product: res.data
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
      console.log(err);
    });
};

export const getProducts = () => dispatch => {
  console.log('act');
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

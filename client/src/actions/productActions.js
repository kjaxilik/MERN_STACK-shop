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

export const getProducts = page => dispatch => {
  axios
    .get('/api/product/all/' + page)
    .then(res => {
      dispatch({
        type: 'GET_PRODUCTS',
        products: res.data.products,
        count: res.data.count
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

export const changePagination = page => dispatch => {
  dispatch({
    type: 'CHANGE_PAGE',
    page
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

export const getUserProducts = id => dispatch => {
  axios
    .get('/api/product/user/' + id)
    .then(res => {
      dispatch({
        type: 'USER_PRODUCTS',
        products: res.data
      });
    })
    .catch(err => {
      if (err) {
        dispatch({
          type: 'GET_ERRORS',
          errors: err.response.data
        });
      }
    });
};

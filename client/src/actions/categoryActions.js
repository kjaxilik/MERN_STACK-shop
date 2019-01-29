import axios from 'axios';

export const getCategories = () => dispatch => {
  axios
    .get('/api/category/all/')
    .then(res => {
      dispatch({
        type: 'GET_CATEGORIES',
        categories: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

export const addCategories = data => dispatch => {
  axios
    .post('/api/category/add' + data)
    .then(res => {
      dispatch({
        type: 'ADD_CATEGORIE',
        status: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

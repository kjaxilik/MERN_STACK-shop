import axios from 'axios';

export const getFavourites = (page, user) => dispatch => {
  axios
    .get('/api/favourite/all/' + page + '/' + user)
    .then(res => {
      dispatch({
        type: 'GET_FAVOURITES',
        products: res.data.favourites,
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

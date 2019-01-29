import axios from 'axios';

export const getFavourites = (page, user) => dispatch => {
  axios
    .get('/api/favourite/all/' + page + '/' + user)
    .then(res => {
      dispatch({
        type: 'GET_FAVOURITES',
        favProducts: res.data.favourites,
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

export const addFavourite = data => dispatch => {
  axios
    .post('/api/favourite/add' + data)
    .then(res => {
      dispatch({
        type: 'ADD_FAVOURITE',
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

import axios from 'axios';

export const registrate = (data, history) => dispatch => {
  axios
    .post('/api/user/register', data)
    .then(res => {
      dispatch({
        type: 'AUTH_USER',
        isAuth: true
      });

      dispatch({
        type: 'GET_ERRORS',
        errors: {}
      });

      dispatch({
        type: 'SET_USER',
        user: res.data
      });

      history.push('/profile');
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

export const login = (data, history) => dispatch => {
  axios
    .post('/api/user/login', data)
    .then(res => {
      dispatch({
        type: 'AUTH_USER',
        isAuth: true
      });

      dispatch({
        type: 'GET_ERRORS',
        errors: {}
      });

      dispatch({
        type: 'SET_USER',
        user: res.data
      });

      history.push('/profile');
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data.errors
      });
    });
};

export const logout = history => dispatch => {
  axios
    .post('/api/user/logout')
    .then(res => {
      dispatch({
        type: 'AUTH_USER',
        isAuth: false
      });

      dispatch({
        type: 'SET_USER',
        user: {}
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data.errors
      });
    });
};

export const getUserById = id => dispatch => {
  axios
    .get('/api/user/' + id)
    .then(res => {
      dispatch({
        type: 'SET_USER',
        user: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
    });
};

export const edit = (data, history) => dispatch => {
  axios

    .put('/api/user/edit', data)
    .then(res => {
      dispatch({
        type: 'EDIT_USER',
        user: res.data
      });
      dispatch({
        type: 'GET_ERRORS',
        errors: {}
      });

      history.push('/profile');
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        errors: err.response.data
      });
      console.log('errors from server: ' + err.response.data);
    });
};

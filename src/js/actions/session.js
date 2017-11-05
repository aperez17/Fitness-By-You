import { browserHistory as history } from 'react-router';
import { SESSION_LOAD, SESSION_LOGIN, SESSION_LOGOUT } from '../actions';
import { deleteSession, postLogin } from '../api/session';
import { updateHeaders } from '../api/utils';

const localStorage = window.localStorage;

export function initialize() {
  return (dispatch) => {
    const { email, name } = localStorage;
    if (email && name) {
      dispatch({
        type: SESSION_LOAD, payload: { email, name, token }
      });
    } else {
      history.push('/login');
    }
  };
}


export function login(email, password, targetPath) {
  return dispatch => {
    const handlers = {
      success: function(payload) {
        dispatch({ type: SESSION_LOGIN, payload});
        try {
          localStorage.email = payload.email;
          localStorage.name = payload.name;
        } catch(e) {
          alert(
            'Unable to preserve session, probably due to being in private ' +
            'browsing mode.'
          );
        }
        history.push(targetPath);
      },
      error: function(payload) {
        dispatch({
          type: SESSION_LOGIN,
          error: true,
          payload: {
            statusCode: payload.status, message: payload.statusText
          }
        });
      }
    }
    postLogin(email, password, handlers)
  };
}

export function logout(session) {
  return (dispatch) => {
    dispatch({ type: SESSION_LOGOUT });
    deleteSession();
    updateHeaders({ Auth: undefined });
    try {
      localStorage.removeItem('email');
      localStorage.removeItem('name');
    } catch (e) {
      // ignore
    }
    window.location.href = '/login'; // reload fully
  };
}

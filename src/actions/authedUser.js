import { logoutUser } from '../utils/api';
import { addNotice } from './notices';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function signOutUser() {
  return {
    type: LOGOUT_USER
  };
};

export function handleSignOutUser(id) {
  return (dispatch) => {
    dispatch(showLoading());

    // Logout user from fake remote server.
    return logoutUser(id)
      .then(() => {
        dispatch(signOutUser());
      })
      .then(() => {
        dispatch(addNotice('You are signed out.', 'success'));
        dispatch(hideLoading());
      })
      .catch((e) => {
        dispatch(addNotice('There was an error. Try Again.', 'danger'));
      });
  };
};

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
};

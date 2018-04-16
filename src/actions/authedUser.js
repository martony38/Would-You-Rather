import { logoutUser } from '../utils/api';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function signOutUser() {
  return {
    type: LOGOUT_USER
  };
};

export function handleSignOutUser(id) {
  return (dispatch) => {
    // Logout user from fake remote server.
    return logoutUser(id)
      .then(() => dispatch(signOutUser()))
      .catch((e) => {
        // TODO: show info message to user
        console.log('There was an error. Try Again.');
      });
  };
};

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
};

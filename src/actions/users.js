import { saveUser } from '../utils/api';
import { handleLogin } from './shared';
import { showLoading, hideLoading } from 'react-redux-loading';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
};

function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

export function handleAddUser({ name, username, password, avatar }) {
  return (dispatch) => {
    dispatch(showLoading());

    // Save new user in fake remote server/database.
    return saveUser({
      username,
      name,
      password,
      avatar
    }).then((user) => {
        dispatch(addUser(user));
        dispatch(hideLoading());
        dispatch(handleLogin(username, password));
      })
      .catch((e) => {
        dispatch(hideLoading());

        // TODO: show info message to user
        console.log('There was an error. Try Again.');
      });
  };
}
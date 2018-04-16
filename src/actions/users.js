import { saveUser } from '../utils/api';

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

    // Save new user in fake remote server/database.
    return saveUser({
      username,
      name,
      password,
      avatar
    }).then((user) => dispatch(addUser(user)))
      .catch((e) => {
        // TODO: show info message to user
        console.log('There was an error. Try Again.');
      });
  };
}
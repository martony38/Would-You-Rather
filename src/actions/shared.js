import { loginUser } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleLogin(username, password) {
  return (dispatch) => {
    dispatch(showLoading());

    // Login user in fake remote server/database.
    return loginUser(username, password)
      .then(({ users, questions, authedUser }) => {
        if (authedUser !== null) {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(setAuthedUser(authedUser));
        } else {
          // TODO: show info message to user
          console.log('wrong username/password');
        }
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        dispatch(hideLoading());

        // TODO: show info message to user
        console.log('There was an error. Try Again.');
      });
  }
}
import { loginUser } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { addNotice } from './notices';
import { showLoading, resetLoading } from 'react-redux-loading-bar';

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
          dispatch(addNotice('You are signed in.', 'success'));
        } else {
          dispatch(addNotice('Wrong username/password. Try Again.', 'danger'));
        }
      })
      .then(() => dispatch(resetLoading()))
      .catch((e) => {
        dispatch(resetLoading());
        dispatch(addNotice('There was an error. Try Again.', 'danger'));
      });
  }
}
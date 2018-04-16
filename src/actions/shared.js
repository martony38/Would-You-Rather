import { loginUser } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { addNotice } from './notices';
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
          dispatch(addNotice('you are logged in', 'success'));
        } else {
          dispatch(addNotice('wrong username/password', 'danger'));
        }
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        dispatch(hideLoading());
        dispatch(addNotice('There was an error. Try Again.', 'danger'));
      });
  }
}
import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import notices from './notices';
import noticeList from './noticeList';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { LOGOUT_USER } from '../actions/authedUser';

const appReducer = combineReducers({
  authedUser,
  users,
  questions,
  notices,
  noticeList,
  loadingBar: loadingBarReducer
});

// Reset store when user logout
// (https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store)
const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

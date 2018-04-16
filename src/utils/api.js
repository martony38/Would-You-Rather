import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser,
  _checkCredentials,
  _logoutUser
} from './_DATA.js';

function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
};

export function saveQuestion(info) {
  return _saveQuestion(info);
};

export function saveUser(info) {
  return _saveUser(info);
};

export function loginUser(id, password) {
  return _checkCredentials(id, password)
    // If authentication successfull send initial data to client
    ? getInitialData()
        .then(({ users, questions }) => ({
          users,
          questions,
          authedUser: id
        }))
    : new Promise((res, rej) => {
        setTimeout(() => {
          res({ authedUser: null });
        }, 500);
      });
};

export function logoutUser(info) {
  return _logoutUser(info);
};
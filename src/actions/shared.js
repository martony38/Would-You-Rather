import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';

const AUTHED_ID = 'tylermcginnis';

function answerQuestion(qid, authedUser, answer) {
  // answer is the string 'optionOne' or 'optionTwo'
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
      qid,
      answer,
      authedUser
    }).then(() => dispatch(answerQuestion(qid, authedUser, answer)))
      .catch((e) => alert('There was an error. Try Again.'));
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      })
      .catch((e) => {
        dispatch(hideLoading());
        alert('There was an error. Try Again.');
      });
  };
};

import { saveQuestion } from '../utils/api';
import { saveQuestionAnswer } from '../utils/api';
import { addNotice } from './notices';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    // Save question in fake remote server/database.
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then((question) => {
        dispatch(addQuestion(question));
      })
      .then(() => {
        dispatch(hideLoading());
        dispatch(addNotice('Question added.', 'success'));
      })
      .catch((e) => {
        dispatch(hideLoading());
        dispatch(addNotice('There was an error. Try Again.', 'danger'));
      });
  };
};


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
    dispatch(showLoading());

    // Save answer in fake remote server/database.
    return saveQuestionAnswer({
      qid,
      answer,
      authedUser
    }).then(() => {
        dispatch(answerQuestion(qid, authedUser, answer));
      })
      .then(() => {
        dispatch(hideLoading());
        dispatch(addNotice('Question answered.', 'success'));
      })
      .catch((e) => {
        dispatch(hideLoading());
        dispatch(addNotice('There was an error. Try Again.', 'danger'));
      });
  };
};

import { RECEIVE_USERS, ADD_USER } from '../actions/users';
import { ANSWER_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      };
    case ADD_USER :
      return {
        ...state,
        [action.user.id]: action.user
      }
    case ANSWER_QUESTION :
      const { qid, authedUser, answer } = action;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default :
      return state;
  }
};

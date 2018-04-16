import  { ADD_NOTICE, REMOVE_NOTICE } from '../actions/notices';

export default function notices(state = {}, action) {
  switch (action.type) {
    case ADD_NOTICE :
      return {
        ...state,
        [action.notice.id]: action.notice
      }
    case REMOVE_NOTICE :
      // Remove object property without mutating.
      // Inspired from :
      // https://github.com/erikras/react-redux-universal-hot-example/issues/962
      // https://blog.ricardofilipe.com/post/immutable-changes-in-js)
      return Object.keys(state)
        .filter((id) => id !== action.id)
        .reduce((acc, id) => ({...acc, [id]: state[id]}), {})
    default :
      return state;
  }
};

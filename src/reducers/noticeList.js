import  { SET_NOTICE_LIST_HEIGHT } from '../actions/noticeList';
import  { ADD_NOTICE } from '../actions/notices';

export default function noticeList(state = { height: 'auto' }, action) {
  switch (action.type) {
    case SET_NOTICE_LIST_HEIGHT :
      return {
        height: action.height
      };
    case ADD_NOTICE :
      return {
        height: '100%'
      }
    default :
      return state;
  }
};

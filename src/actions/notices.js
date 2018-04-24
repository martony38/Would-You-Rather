export const ADD_NOTICE = 'ADD_NOTICE';
export const REMOVE_NOTICE = 'REMOVE_NOTICE';

export function addNotice(text, type) {
  const notice = {
    id: Math.random().toString(36).substring(2, 15),
    text,
    type,
    showAnimation: true
  };
  return {
    type: ADD_NOTICE,
    notice
  };
};

export function removeNotice(id) {
  return {
    type: REMOVE_NOTICE,
    id
  };
};

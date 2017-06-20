import { SEND_MESSAGE } from '../actions/viewIndex.jsx'

export function viewReducer (state, action) {
  if (!state) {
    state = {
      message: ''
    }
  }
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

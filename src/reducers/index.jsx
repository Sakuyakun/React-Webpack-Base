import { SEND_MESSAGE } from '../actions/viewIndex.jsx'

export function viewReducer (state, action) {
  if (!state) {
    state = {
      message: `
        React开发环境搭建练习用，目前还有许多不完善的地方，
        如果有好的建议规范请在Issues告诉我。
        github.com/Sakuyakun/React-Webpack-Base/issues
      `
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

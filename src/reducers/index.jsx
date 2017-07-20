import { SEND_MESSAGE } from "../actions/index.jsx";

export function IndexReducers(state, action) {
  if (!state) {
    state = {
      message: `
        REACT SPA开发环境搭建练习用，
        目前依旧存在许多不完善的地方。
        如果有好的搭建建议请在Issues告诉我。
        github.com/Sakuyakun/React-Webpack-Base/issues
        Sakuya 2017/06/15
      `
    };
  }
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}

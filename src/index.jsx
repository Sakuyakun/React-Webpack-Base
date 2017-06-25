import { AppContainer as HotReloader } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers.jsx";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { viewReducer } from "./reducers/index";
import normalize from "./normalize.scss";
import style from "./style.scss";

// store
const myMiddleware = store => next => action => {
  // 自定义中间件
  let result = next(action);
  return result;
};
const combine = combineReducers({ viewReducer });
const store = createStore(combine, applyMiddleware(myMiddleware));

// render
const rootEle = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <HotReloader>
      <Provider store={store}>
        <Routers />
      </Provider>
    </HotReloader>,
    rootEle
  );
};
render();

// hotReplace
if (module.hot) {
  module.hot.accept("./routers.jsx", render);
}

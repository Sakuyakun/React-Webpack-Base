import { AppContainer as HotReloader } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers.jsx";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { viewReducer } from "./reducers/index";
import normalize from "./normalize.scss";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import style from "./style.scss";

// PWA
if (process.env.NODE_ENV === "production") {
  OfflinePluginRuntime.install();
}

// 自定义中间件
const myMiddleware = store => next => action => {
  // some code ...
  let result = next(action);
  return result;
};

// store
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

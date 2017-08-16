import { AppContainer as HotReloader } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers.jsx";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import IndexReducers from "./reducers/index";
import normalize from "./normalize.scss";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// offline plugin 自行选择是否开启
if (process.env.NODE_ENV === "production") {
  OfflinePluginRuntime.install();

  // 注销serviceWorker方案
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.getRegistration().then((registration) => {
  //     registration && registration.unregister().then((boolean) => {
  //       boolean ? alert('注销成功') : alert('注销失败')
  //     });
  //   })
  // }
}

// 自定义中间件
const myMiddleware = store => next => action => {
  // some code ...
  let result = next(action);
  return result;
};

// store
const combine = combineReducers({ IndexReducers });
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

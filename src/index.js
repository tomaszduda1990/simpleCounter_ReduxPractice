import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer, resultsReducer } from "./store/reducers";
import registerServiceWorker from "./registerServiceWorker";
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});

// const logger = store => {
//   return next => {
//     return action => {
//       console.log("[Middleware] Dispatching", action);
//       const result = next(action);
//       console.log("[Middleware] next state", store.getState());
//       return result;
//     };
//   };
// };
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { counterReducer, resultsReducer } from "./store/reducers";
import registerServiceWorker from "./registerServiceWorker";
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});
const store = createStore(rootReducer);
console.log(store);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

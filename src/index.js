import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import dashboardReducer from "./store/reducers/dashboardReducer";
import authReducer from "./store/reducers/authReducer";
import thunk from "redux-thunk";
// import createSagaMiddleware from 'redux-saga'
// import { watchAuth } from './store/sagas/rootSaga';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

//Creating the store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

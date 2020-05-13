import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import axios from "axios";
import reducer from "./store/reducer";

axios.defaults.baseURL = "http://www.omdbapi.com/";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    //this is where you would edit the request anyway you choose
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response.data);
    //this is where you would edit the response
    if (response.data.Error === "Too many results.") {
      console.log("TOO MANY RESULTS");
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeMovies = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeMovies}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

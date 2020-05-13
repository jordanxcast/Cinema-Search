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

axios.defaults.baseURL = "https://www.omdbapi.com/";

axios.interceptors.response.use(
  (response) => {
    console.log(response.data);
    //this is where you would edit the response - we dont need that for now - more for the future
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

//dev tools enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create redux store with middleware - utilizing redux thunk for async functionality
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

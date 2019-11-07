import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App'
import movieReducer from "./state/reducers";
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(movieReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App'
import movieReducer, {formReducer} from "./state/reducers";
import { BrowserRouter as Router } from 'react-router-dom';
const monsterReducer= combineReducers({moviesState: movieReducer, formValues: formReducer});

const store = createStore(monsterReducer,{},
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
),);

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

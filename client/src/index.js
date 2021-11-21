import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.css';
import songReducer from './store/songReducer';
import likedSongsReducer from './store/likedSongsReducer';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
const app = combineReducers({
    songReducer,
    likedSongsReducer
})

let store = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

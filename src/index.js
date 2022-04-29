import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose} from 'redux'

import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = configureStore({
  reducer : reducers,
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
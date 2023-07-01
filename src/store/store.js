import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//reducer & action
import {loginReducer} from './reducer/index';
//root reducer

export const rootReducer = {
  reducer: {
    login: loginReducer.reducer,
  },
};

export const store = configureStore (rootReducer, applyMiddleware (thunk));

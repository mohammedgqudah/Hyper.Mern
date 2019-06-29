import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduceReducers from 'reduce-reducers';
import io from 'socket.io-client';

import baseReducer from './reducers/base.reducer';
import authReducer from './reducers/auth.reducer';
import i18nReducer from './reducers/i18n.reducer';
import languages from './languages';

export default () => {
  // socketio
  window.io = io;
  const socket = io('http://localhost:3000');
  window.socket = socket;
  // -------
  const reducers = reduceReducers(baseReducer, authReducer, i18nReducer);
  const devTool =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const storedUser = localStorage.getItem('USER');
  const store = createStore(
    reducers,
    {
      user: JSON.parse(storedUser) || undefined,
      auth: { login: {}, signup: {}, logged_in: !!storedUser },
      i18n: { languages, fallback: 'en' }
    },
    compose(
      applyMiddleware(thunk, logger),
      devTool
    )
  );
  return store;
};

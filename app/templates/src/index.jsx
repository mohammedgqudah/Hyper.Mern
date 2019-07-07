/* Here we are binding React (and the client side routing via react-router-dom) to the HTML file to an
 * element with an ID of `root` and setting up
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configStore from './store/configStore';

import './styles/reset.css';
import './styles/animate.scss';
import './styles/main.scss';
/* App is the entry point to the React code.*/
import Routes from './Routes/routes.client';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

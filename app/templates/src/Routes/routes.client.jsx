/* This is where you declare routes for client side routing and specify which component corresponds to which route */
/* The components for each route should be created in Routes/LazyLoadRoutes.jsx as this will enable lazy loading */
/* Routes or components (like navbar) which you don't want to be lazy loaded can be imported directly in this
 * file and SHOULD NOT be declared in LazyLoadRoutes.jsx
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Navbar should appear on every page and so should not be lazy loaded
import Navbar from '../components/Navbar/Navbar.jsx';

// Import lazy loaded route components
import { Home, ErrorPage, ContactUs } from './LazyLoadRoutes.jsx';
import login from './login-signup/login.jsx';
import signup from './login-signup/signup.jsx';
import { Scrollbars } from 'react-custom-scrollbars';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  registerOnScroll = cb => {
    this._onScroll = cb;
  };
  onScroll = values => {
    this._onScroll(values);
  };
  render() {
    return (
      <div className="routes-container">
        <Scrollbars
          style={{ width: '100%', height: '100%' }}
          onUpdate={this.onScroll}
        >
          <Navbar registerOnScroll={this.registerOnScroll} autoHide />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
            <Route component={ErrorPage} />
          </Switch>
        </Scrollbars>
      </div>
    );
  }
}

export default Routes;

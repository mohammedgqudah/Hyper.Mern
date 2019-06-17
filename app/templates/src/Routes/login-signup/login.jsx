import React from "react";
import "./auth.scss";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { mdiEmailOutline } from "@mdi/js";
import { mdiKeyOutline } from "@mdi/js";
import Button from "../../components/Button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import { LOGIN, SIGNUP } from "../../store/actions/auth.actions.js";
import settings from "../../settings";
import DelayedRedirect from "../../components/DelayedRedirect.jsx";

@connect(
  state => ({ login_data: state.auth.login }),
  d => ({ dispatch: d })
)
class Auth extends React.Component {
  state = {
    data: {
      id: "",
      password: ""
    },
    errors: {}
  };
  onLogin = event => {
    event.preventDefault();
    this.props.dispatch(
      LOGIN(this.state.data, () => this.setState({ logged_in: true }))
    );
  };
  onEmailChange = ({ target }) => {
    let { value } = target;
    this.setState({ data: { ...this.state.data, id: value } });
  };
  onPasswordChange = ({ target }) => {
    let { value } = target;
    this.setState({ data: { ...this.state.data, password: value } });
  };
  render() {
    let { data, logged_in } = this.state;
    let { login_data } = this.props;
    let { password, id } = data;
    let className = login_data.logging_in && "logging_in";
    return (
      <div className={`AuthPage`}>
        {logged_in && (
          <DelayedRedirect
            delay={settings.AfterAuthDelay}
            to={settings.AuthRedirectUrl}
          />
        )}
        <div className={`form-container ${logged_in && "done"}`}>
          <div className="main">
            <h3 className="title">Sign in to {settings.AppName}</h3>
            <h5 className="small">fill out the fields</h5>
            <form onSubmit={this.onLogin}>
              <div className="fields">
                <Input
                  placeholder={"Email or Username"}
                  style={{ width: 300 }}
                  icon={mdiEmailOutline}
                  onChange={this.onEmailChange}
                  data={id}
                  error={login_data.email}
                  name={"email"}
                />
                <Input
                  type="password"
                  placeholder={"Password"}
                  style={{ width: 300 }}
                  icon={mdiKeyOutline}
                  onChange={this.onPasswordChange}
                  data={password}
                  error={login_data.password}
                  name="password"
                />
                <small className="error">{login_data.main}</small>
                <a className="forgot-pass">Forgot your password?</a>
                <Button
                  content="Login"
                  type="submit"
                  className={className}
                  disabled={login_data.logging_in}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;

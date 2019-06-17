import React from "react";
import "./auth.scss";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { mdiEmailOutline } from "@mdi/js";
import { mdiKeyOutline } from "@mdi/js";
import { mdiAccountCircleOutline } from "@mdi/js";
import Button from "../../components/Button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import { LOGIN, SIGNUP } from "../../store/actions/auth.actions.js";
import settings from "../../settings";
import DelayedRedirect from "../../components/DelayedRedirect.jsx";

@connect(
  state => ({ signup_data: state.auth.signup }),
  d => ({ dispatch: d })
)
class Auth extends React.Component {
  state = {
    data: {
      email: "",
      name: "",
      password: ""
    },
    errors: {}
  };
  onSignup = event => {
    event.preventDefault();
    this.props.dispatch(
      SIGNUP(this.state.data, () => this.setState({ logged_in: true }))
    );
  };
  onEmailChange = ({ target }) => {
    let { value } = target;
    this.setState({ data: { ...this.state.data, email: value } });
  };
  onPasswordChange = ({ target }) => {
    let { value } = target;
    this.setState({ data: { ...this.state.data, password: value } });
  };
  onNameChange = ({ target }) => {
    let { value } = target;
    this.setState({ data: { ...this.state.data, name: value } });
  };
  render() {
    let { data, logged_in } = this.state;
    let { signup_data } = this.props;
    let { password, email, name } = data;
    let className = signup_data.signing_up && "logging_in";
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
            <h3 className="title">Create an account</h3>
            <h5 className="small">fill out the fields</h5>
            <form onSubmit={this.onSignup}>
              <div className="fields">
                <Input
                  placeholder={"Email"}
                  style={{ width: 300 }}
                  icon={mdiEmailOutline}
                  onChange={this.onEmailChange}
                  data={email}
                  error={signup_data.email}
                />
                <Input
                  placeholder={"Name"}
                  style={{ width: 300 }}
                  icon={mdiAccountCircleOutline}
                  onChange={this.onNameChange}
                  data={name}
                  error={signup_data.name}
                />
                <Input
                  type="password"
                  placeholder={"Password"}
                  style={{ width: 300 }}
                  icon={mdiKeyOutline}
                  onChange={this.onPasswordChange}
                  data={password}
                  error={signup_data.password}
                />
                <small className="error">{signup_data.main}</small>
                <Link to="/login">Have an account?</Link>
                <Button
                  content="Signup"
                  type="submit"
                  className={className}
                  disabled={signup_data.signing_up}
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

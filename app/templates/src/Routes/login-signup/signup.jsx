import React from "react";
import styles from "./auth.module.scss";
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
import Trans from "../../components/i18n/Trans";

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
    let btn_class_name = signup_data.signing_up && "logging_in";
    return (
      <div className={styles.page}>
        {logged_in && (
          <DelayedRedirect
            delay={settings.AfterAuthDelay}
            to={settings.AuthRedirectUrl}
          />
        )}
        <div className={`${styles.form_container} ${logged_in && "done"}`}>
          <div className={styles.main}>
            <h3 className={styles.title}>
              <Trans value="create_an_account" />
            </h3>
            <h5 className={styles.small}>
              <Trans value="fill_out_the_fields" />
            </h5>
            <form onSubmit={this.onSignup}>
              <div className={styles.fields}>
                <Input
                  placeholder={"Email"}
                  style={{ width: 300 }}
                  icon={mdiEmailOutline}
                  onChange={this.onEmailChange}
                  data={email}
                  error={<Trans value={signup_data.email} />}
                />
                <Input
                  placeholder={"Name"}
                  style={{ width: 300 }}
                  icon={mdiAccountCircleOutline}
                  onChange={this.onNameChange}
                  data={name}
                  error={<Trans value={signup_data.name} />}
                />
                <Input
                  type="password"
                  placeholder={"Password"}
                  style={{ width: 300 }}
                  icon={mdiKeyOutline}
                  onChange={this.onPasswordChange}
                  data={password}
                  error={<Trans value={signup_data.password} />}
                />
                <small className={styles.error}>
                  <Trans value={signup_data.main}/>
                </small>
                <Link to="/login" className={`${styles.forgot_pass} slink`}>
                  <Trans value="already_have_an_account?" />
                </Link>
                <Button
                  content={<Trans value="signup" />}
                  type="submit"
                  className={`${btn_class_name} ${styles.button}`}
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

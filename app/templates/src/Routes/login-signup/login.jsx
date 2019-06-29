import React from 'react';
import styles from './auth.module.scss';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { mdiEmailOutline } from '@mdi/js';
import { mdiKeyOutline } from '@mdi/js';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import { LOGIN, SIGNUP } from '../../store/actions/auth.actions.js';
import settings from '../../settings';
import DelayedRedirect from '../../components/DelayedRedirect.jsx';
import Trans from '../../components/i18n/Trans';

@connect(
  state => ({ login_data: state.auth.login }),
  d => ({ dispatch: d })
)
class Auth extends React.Component {
  state = {
    data: {
      id: '',
      password: ''
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
    let btn_class_name = login_data.logging_in && 'logging_in';
    return (
      <div className={styles.page}>
        {logged_in && (
          <DelayedRedirect
            delay={settings.AfterAuthDelay}
            to={settings.AuthRedirectUrl}
          />
        )}
        <div className={`${styles.form_container} ${logged_in && 'done'}`}>
          <div className={styles.main}>
            <h3 className={styles.title}>
              <Trans value="login" />
            </h3>
            <h5 className={styles.small}>
              <Trans value="fill_out_the_fields" />
            </h5>
            <form onSubmit={this.onLogin}>
              <div className={styles.fields}>
                <Input
                  placeholder={'Email or Username'}
                  style={{ width: 300 }}
                  icon={mdiEmailOutline}
                  onChange={this.onEmailChange}
                  data={id}
                  error={<Trans value={login_data.email} />}
                  name={'email'}
                />
                <Input
                  type="password"
                  placeholder={'Password'}
                  style={{ width: 300 }}
                  icon={mdiKeyOutline}
                  onChange={this.onPasswordChange}
                  data={password}
                  error={<Trans value={login_data.password} />}
                  name="password"
                />
                <small className={styles.error}>
                  <Trans value={login_data.main} />
                </small>
                <Link className={`${styles.forgot_pass} slink`} to="/">
                  <Trans value="forgot_your_password?" />
                </Link>
                <Button
                  content={<Trans value="login" />}
                  type="submit"
                  className={`${btn_class_name} ${styles.button}`}
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

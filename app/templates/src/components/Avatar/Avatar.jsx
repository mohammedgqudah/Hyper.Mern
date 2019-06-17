import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./Avatar.scss";
import getAvatar from "../../helpers/getAvatar";
import { LOGOUT } from "../../store/actions/auth.actions";

@connect(
  state => ({ user: state.user }),
  d => ({dispath: d})
)
class Avatar extends Component {
  state = { open: false, anchorEl: null };
  onClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  onClose = event => {
    this.setState({ anchorEl: null });
  };
  onProfile = () => {
    this.onClose();
    this.props.history.push("/profile");
  };
  onLogout = () => {
    this.onClose();
    this.props.dispath(LOGOUT())
  };
  render() {
    const { user } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className="Avatar">
        <img
          src={getAvatar(user.avatar)}
          alt={user.name}
          className="Avatar__img"
          onClick={this.onClick}
          aria-controls="user-menu"
          aria-haspopup="true"
        />
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.onClose}
        >
          <MenuItem onClick={this.onProfile}>Profile</MenuItem>
          <MenuItem onClick={this.onLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Avatar);

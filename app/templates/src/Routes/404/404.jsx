import React, { Component } from "react";
import { Ghost } from "react-kawaii";

import "./404.scss";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="page404" >
		<Ghost mood="sad" color="#9bace4" size={250} className="ghost"/>
		<h2>404 Page Not Found</h2>
	</div>;
  }
}

export default ErrorPage;

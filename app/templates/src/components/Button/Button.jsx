import React from "react";
class Button extends React.Component {
  state = {};
  render() {
    let { content, className, ...rest } = this.props;
    return (
      <button className={`Button ${className}`} {...rest}>
        {content}
      </button>
    );
  }
}

export default Button;

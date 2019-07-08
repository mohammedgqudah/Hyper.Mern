import React, { Component } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import styles from './dropdown.module.scss';
import { Manager, Reference, Popper } from 'react-popper';
import { Transition } from 'react-transition-group';

export default class Dropdown extends Component {
  state = { open: false };
  constructor(props) {
    super(props);
    this.el = document.querySelector('#dropdowns');
    if (!this.el) {
      this.el = document.createElement('div');
      this.el.id = 'dropdowns';
      document.body.appendChild(this.el);
    }
  }
  onOpen = () => {
    this.setState({ open: true });
  };
  onClose = e => {
    let toElement = e.toElement || e.relatedTarget;
    if (toElement !== this.dropdown_container) this.setState({ open: false });
  };
  withMouseChange = child => {
    let { click } = this.props;
    return React.cloneElement(child, {
      onMouseLeave: this.onClose,
      [click ? 'onClick' : 'onMouseEnter']: this.onOpen
    });
  };
  dropdown = inProp => {
    let duration = 300;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    };
    const transitionStyles = {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 }
    };
    let { className } = this.props;
    return (
      <Popper>
        {({ ref, style, placement, arrowProps }) => {
          return (
            <Transition in={inProp} timeout={duration} unmountOnExit>
              {state =>
                this.withMouseChange(
                  <div
                    ref={e => {
                      ref(e);
                      this.dropdown_container = e;
                    }}
                    style={{
                      ...style,
                      ...defaultStyle,
                      ...transitionStyles[state]
                    }}
                    data-placement={placement}
                    className={styles.container}
                  >
                    <div className={[styles.dropdown, className].join(' ')}>
                      {/* <div className={styles.arrow} {...arrowProps}>
                        &#9650;
                      </div> */}
                      {this.props.render}
                    </div>
                  </div>
                )
              }
            </Transition>
          );
        }}
      </Popper>
    );
  };
  render() {
    let { onClose, onOpen } = this;
    return (
      <Manager>
        <Reference>
          {({ ref }) =>
            React.cloneElement(this.withMouseChange(this.props.children), {
              ref
            })
          }
        </Reference>
        {this.dropdown(this.state.open)}
      </Manager>
    );
  }
}

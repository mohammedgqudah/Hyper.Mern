import React from 'react'
import './Input.scss';
import { Icon } from '@mdi/react';
import { mdiPencilOutline } from '@mdi/js';
class Input extends React.Component {
    state = {}
    render() {
        let { style, placeholder, icon, size, type, onChange, data, error } = this.props;
        return (
            <div className="InputContainer">
                <div className={`Input`} style={{ width: 200, ...style }}>
                    <Icon
                        size={size || 0.7}
                        path={icon || mdiPencilOutline}
                    />
                    <input
                        className="Input__input" placeholder={placeholder}
                        type={type || "text"} onChange={onChange}
                        value={data}
                    />
                </div>
                <small className="error">{error}</small>
            </div>
        )
    }
}


export default Input;

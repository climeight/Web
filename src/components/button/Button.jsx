import React from 'react'
import './button.css';

const Button = (props) => {
    return (
        <div className="climeight__button">
            <p>{props.title}</p>
        </div>
    )
}

export default Button

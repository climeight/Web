import React from 'react'
import './css/style-input.css'

const Input = (props) => {
    return (
        <div>
            <input className="climeight__input" placeholder={props.placeholder} />
        </div>
    )
}

export default Input

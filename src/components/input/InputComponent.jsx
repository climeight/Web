import React from 'react'
import './css/InputComponentStyle.css'

const InputComponent = (props) => {
    return (
        <div>
            <input className="climeight__input" placeholder={props.placeholder} />
        </div>
    )
}

export default InputComponent

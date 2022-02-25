import React from 'react'
import './css/IconButtonComponentStyle.css'

import { ReactComponent as IconGo } from '../../assets/button/go_icon.svg';

const IconButtonComponent = (props) => {
    return (
      <a className="climeight__button" href={props.href}>
        <IconGo />
      </a>
    )
}

export default IconButtonComponent

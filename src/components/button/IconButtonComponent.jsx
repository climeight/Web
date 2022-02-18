import React from 'react'
import './css/IconButtonComponentStyle.css'

import { ReactComponent as IconGo } from '../../assets/button/go_icon.svg';

const IconButtonComponent = (props) => {
    return (
      <div className="climeight__button">
        <IconGo />
      </div>
    )
}

export default IconButtonComponent

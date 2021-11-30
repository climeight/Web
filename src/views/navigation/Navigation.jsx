import React from 'react'
import './navigation.css'

import logo_dark from '../../assets/navigation/logo/climeight_dark_logo.svg'

import icon_dropdown from '../../assets/navigation/icons/dropdown.svg'
import icon_sun from '../../assets/navigation/icons/sun.svg'
import icon_circle from '../../assets/navigation/icons/circle.svg'

const Navigation = () => {
    return (
        <div className="climeight__navigation">
            <div className="climeight__navigation-bar">
                <div className="climeight__navigation-logo">
                    <img src={logo_dark} alt="climeight.de" />
                </div>
            </div>

            <div className="climeight__navigation-menu">
                <img src={icon_dropdown} alt="icon_dropdown" />
                <img src={icon_sun} alt="icon_dropdown" />
                <img src={icon_circle} alt="icon_dropdown" />
            </div>
        </div>
    )
}

export default Navigation

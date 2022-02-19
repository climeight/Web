import React from 'react'
import './css/IntroductionSectionStyle.css'

import ImageEffectSmoke from '../../assets/effects/effect_smoke.png';

const IntroductionSection = (props) => {
    return (
      <div className="climeight__introduction">
        <div className="climeight__container climeight__introduction__container">
          <div className="climeight__introduction__effects">
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
          </div>

          <div className="climeight__introduction__text">
            <p>Fahrrad fahren.</p>  
            <p>Klima retten.</p>  
            <p>Prämien verdienen.</p>  
          </div>
        </div>
      </div>
    )
}

export default IntroductionSection

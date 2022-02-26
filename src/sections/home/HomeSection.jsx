import React from 'react'
import { VendorStoreHolderComponent, InputComponent, IconButtonComponent } from '../../components'
import './css/HomeSectionStyle.css'

import ImageMockupMainPage from '../../assets/mockups/mockup_main_page.png';
import ImageEffectSmoke from '../../assets/effects/effect_smoke.png';

const HomeSection = () => {
  return (
    <div className="climeight__home-section">
      <div className="climeight__container climeight__home-section__container">
        <div className="climeight__home-section__title">
          <img className="climeight__home-section__mockup" src={ImageMockupMainPage} alt="" />
          <img className="climeight__home-section__mockup-smoke" src={ImageEffectSmoke} alt="" />

          <div className="climeight__home-section__upper-title">
            <p>GPS</p>
            <p>KLIMA GERETTET</p>
          </div>

          <p>Worauf wartest du? Rette das Klima.</p>

          <span className="climeight__home-section__description">Unsere Mission ist es eine App bis Ende 2022 zu entwickeln, die Fahrradfahrer mit
                Punkten belohnt welche gegen Prämien eingetauscht werden können oder
                alternativ an hilfsbedürftige Organisationen gespendet werden können.</span>
          
          <div className="climeight__home-section__row">
            <InputComponent placeholder="Deine E-Mail Addresse" />
            <IconButtonComponent href="/subscribe" />
          </div>
          
          <div className="climeight__home-section__vendor-store-holder">
            <VendorStoreHolderComponent />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeSection
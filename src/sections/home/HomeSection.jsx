import React from 'react'
import { VendorStoreHolderComponent, InputComponent } from '../../components'
import './css/HomeSectionStyle.css'

const HomeSection = () => {
  return (
    <div className="climeight__home-section">
      <div className="climeight__container climeight__home-section__container">
        <div className="climeight__home-section__title">
          <p>Worauf wartest du? Rette das Klima.</p>
          <span className="climeight__home-section__description">Unsere Mission ist es eine App bis Ende 2022 zu entwickeln, die Fahrradfahrer mit
                Punkten belohnt welche gegen Prämien eingetauscht werden können oder
                alternativ an hilfsbedürftige Organisationen gespendet werden können.</span>
          
          <div className="climeight__home-section__vendor-store-holder">
            <InputComponent placeholder="Deine E-Mail Addresse" />
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
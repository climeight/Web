import React from 'react'
import './css/AboutSectionStyle.css'

import { ReactComponent as VectorAboutTitleText } from '../../assets/texts/about_title.svg';
import { ReactComponent as VectorAboutTitleBlob } from '../../assets/blobs/about_title_blob.svg';

const AboutSection = () => {
    return (
      <div className="climeight__about">
        <div className="climeight__container climeight__about__container">
          <div className="climeight__about__header">
            <VectorAboutTitleBlob className="climeight__about__header-blob" />
            
            <VectorAboutTitleText />
            <p className="climeight__about__title">Fahren. Sammeln. Einlösen.</p>
            <p className="climeight__about__header-desc">Noch nie ist das Fahrradfahren so schön gewesen. Nutzen oder vegessen.</p>
          </div>

          <div className="climeight__about__content">
            <ul>
              <li>
                    <span class="climeight__about__title">Kostenfrei</span>
                    <p>Preis</p>
              </li>  
              <li>
                    <span class="climeight__about__title">Ohne Kompromisse</span>
                    <p>Eigenschaften</p>
              </li>  
              <li>
                    <span class="climeight__about__title">Deutschland</span>
                    <p>Hauptsitz</p>
              </li>  
              <li>
                    <span class="climeight__about__title">Jung & frisch</span>
                    <p>Gründerteam</p>
              </li>  
              <li>
                    <span class="climeight__about__title">Netz Westmünsterland</span>
                    <p>Veröffentlichungsradius</p>
              </li>      
           </ul>
          </div>
        </div>
      </div>
    )
}

export default AboutSection

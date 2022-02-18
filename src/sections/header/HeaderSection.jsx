import React from 'react'
import './css/HeaderSectionStyle.css'

import VectorLogoDark from '../../assets/climeight-assets/logo/shared/climeight-shared-logo_dark.png';

const HeaderSection = () => {
    return (
        <header className="climeight__header">
          <div className="climeight__container">
            <div className="climeight__header__grid">
              
              <div className="climeight__header__logo">
                <img src={VectorLogoDark} alt="" />
              </div>

              <div className="climeight__header__menu">
                <div className="climeight__header__menu-container">

                  <div className="climeight__header__menu-links">
                    <a className="climeight__header__menu-link" href="#test">Hauptmenü</a>
                    <a className="climeight__header__menu-link" href="#test">Merkmale</a>
                    <a className="climeight__header__menu-link" href="#test">FAQ</a>
                  </div>

                  <div className="climeight__header__menu-lang">
                    <div className="climeight__header__menu-lang__toggle">
                      <font className="climeight__header__vertical-align">
                        <font className="climeight__header__vertical-align">DE</font>
                      </font>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}

export default HeaderSection

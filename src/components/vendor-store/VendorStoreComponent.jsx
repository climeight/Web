import React from 'react'
import './css/VendorStoreComponentStyle.css'

import { ReactComponent as VectorAppleLogo } from '../../assets/vendor-store/apple-logo.svg';
import { ReactComponent as VectorPlayStoreLogo } from '../../assets/vendor-store/playstore-logo.svg';
import { ReactComponent as VectorWindowsLogo } from '../../assets/vendor-store/windows-logo.svg';

const VendorStoreComponent = (props) => {
    const TargetVendorVector = () => {
        switch(props.vendor) {
          case "Apple App-Store":   return <VectorAppleLogo />;
          case "Google Play":   return <VectorPlayStoreLogo />;
          case "Windows Store":   return <VectorWindowsLogo />;
          default:              return <VectorAppleLogo />
        }
      }

    return (
      
        <a className="climeight__vendor-store" href={props.endpoint}>
             { TargetVendorVector() }

            <span className="climeight__vendor-store__text climeight__vendor-store__title">Bald erhältlich</span>
            <span className="climeight__vendor-store__text">{props.vendor}</span>
        </a>
    )
}

export default VendorStoreComponent

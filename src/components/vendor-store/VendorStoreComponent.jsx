import React from 'react'
import './css/VendorStoreComponentStyle.css'

import { ReactComponent as VectorAppleLogo } from '../../assets/components/vendor-store/apple-logo.svg';
import { ReactComponent as VectorPlayStoreLogo } from '../../assets/components/vendor-store/playstore-logo.svg';
import { ReactComponent as VectorWindowsLogo } from '../../assets/components/vendor-store/windows-logo.svg';

const VendorStoreComponent = (props) => {
    return (
        <a className="climeight__vendor-store" href={props.endpoint}>
            {(() => {
                switch(props.vendor) {
                    case "Apple App-Store": return <VectorAppleLogo />;
                    case "Google Play":     return <VectorPlayStoreLogo />;
                    case "Windows Store":   return <VectorWindowsLogo />;
                    default:                return <VectorAppleLogo />
                }
            })()}

            <span className="climeight__vendor-store__text climeight__vendor-store__title">Bald erhältlich</span>
            <span className="climeight__vendor-store__text">{props.vendor}</span>
        </a>
    )
}

export default VendorStoreComponent

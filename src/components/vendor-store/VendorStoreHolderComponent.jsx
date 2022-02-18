import React from 'react'
import './css/VendorStoreHolderComponentStyle.css'
import VendorStoreComponent from './VendorStoreComponent'

const VendorStoreHolderComponent = (props) => {
    return (
        <div className="climeight__vendor-store-holder">
            <VendorStoreComponent vendor="Apple App-Store" endpoint="https://google.de" />
            <VendorStoreComponent vendor="Google Play" endpoint="https://google.de" />
            <VendorStoreComponent vendor="Windows Store" endpoint="https://google.de" />
        </div>
    )
}

export default VendorStoreHolderComponent

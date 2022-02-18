import React from 'react'
import './css/VendorStoreHolderComponentStyle.css'
import VendorStoreComponent from './VendorStoreComponent'

const VendorStoreHolderComponent = () => {
    return (
        <div className="climeight__vendor-store-holder">
            <VendorStoreComponent vendor="Apple App-Store" endpoint="https://apple.de" />
            <VendorStoreComponent vendor="Google Play" endpoint="https://play.google.com" />
            <VendorStoreComponent vendor="Windows Store" endpoint="https://microsoft.com" />
        </div>
    )
}

export default VendorStoreHolderComponent

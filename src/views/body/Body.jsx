import React from 'react'
import './body.css'

import { Button } from '../../components';

const Body = () => {
    return (
        <div className="climeight__body">
            <div className="climeight__body-content">
                <p>Werde jetzt Teil, des Klimaschutzes.</p>
                <Button title="Anmelden" />
            </div>
        </div>
    )
}

export default Body

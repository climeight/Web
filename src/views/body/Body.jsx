import React from 'react'
import './body.css'

import { Button, Input, Brands } from '../../components';

import image_people from '../../assets/body/image_people.png'

const Body = () => {
    return (
        <div className="climeight__body">
            <div className="climeight__body-content">
                <div className="climeight__body-title-container">
                    <p className="climeight__body-title">Werde jetzt Teil, des Klimaschutzes.</p>
                    <p className="climeight__body-title-description">climeight. - die App, die das Fahrradfahren verändert.</p>
                </div>

                <p className="climeight__body-content-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, ipsum dolor sit amet.</p>
                
                <div className="climeight__input-content">
                    <Input placeholder="Deine E-Mail Adresse:" />
                    <Button title="Anmelden" />
                </div>

                <div className="climeight__body-content__people">
                    <img src={image_people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

                <Brands />
            </div>
        </div>
    )
}

export default Body

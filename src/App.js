import React from 'react';

import { Navigation, Body, Footer } from './views';

// stylesheets
import './App.css'

const App = () => {
    return(
        <div className="App">
            <Navigation />
            <Body />
            <Footer />
        </div>
    )
}

export default App
import React from 'react';

import { Navigation, Body } from './views';

// stylesheets
import './App.css'

const App = () => {
    return(
        <div className="App">
            <Navigation />
            <Body />
        </div>
    )
}

export default App
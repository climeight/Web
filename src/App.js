/*
 * Copyright (c) 2022 climeight.de
 * All rights reserved.
 * Author: d5chahannam
 */

import React from 'react';

// stylesheets
import './App.css'
import { VendorStoreComponent } from './components';

const App = () => {
    return(
      <div>
        <VendorStoreComponent endpoint="https://google.de" />
      </div>
    )
}

export default App
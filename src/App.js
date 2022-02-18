/*
 * Copyright (c) 2022 climeight.de
 * All rights reserved.
 * Author: d5chahannam
 */

import React from 'react';

// stylesheets
import './App.css'
import { HeaderSection, HomeSection, IntroductionSection } from './sections';

const App = () => {
    return(
      <div>
        <HeaderSection />
        <HomeSection />
        <IntroductionSection />
      </div>
    )
}

export default App
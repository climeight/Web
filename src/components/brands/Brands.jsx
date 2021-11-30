import React from 'react';

import google from '../../assets/body/brands/google.png'
import slack from '../../assets/body/brands/slack.png'
import atlassian from '../../assets/body/brands/atlassian.png'
import dropbox from '../../assets/body/brands/dropbox.png'
import shopify from '../../assets/body/brands/shopify.png'

import './brands.css';

const Brand = () => (
  <div className="climeight__brands section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
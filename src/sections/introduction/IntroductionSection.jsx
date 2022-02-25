import React from 'react'
import $ from 'jquery';

import './css/IntroductionSectionStyle.css'

import ImageEffectSmoke from '../../assets/effects/effect_smoke.png';
import IntroductionSea from '../../assets/videos/introduction_sea.mp4';

const IntroductionSection = (props) => {
    React.useEffect(() => {
      const handler = () => {
        $('.climeight__introduction').each(function () {
          var hold = $(this);
      
          var pos_scroll_frame_1 = ((hold.find('.climeight_introduction__scroll-frame-1').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight_introduction__scroll-frame-1').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_2 = ((hold.find('.climeight_introduction__scroll-frame-2').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight_introduction__scroll-frame-2').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_3 = ((hold.find('.climeight_introduction__scroll-frame-3').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight_introduction__scroll-frame-3').outerHeight() * -1).toFixed(6);
          
          var temp_scroll_frame_1 = 0;
          var temp_scroll_frame_2 = 0;
          var temp_scroll_frame_3 = 0;
      
          if (pos_scroll_frame_1 < 0) {
            temp_scroll_frame_1 = 0;
          } else if (pos_scroll_frame_1 > 1) {
            temp_scroll_frame_1 = 1;
          } else {
            temp_scroll_frame_1 = pos_scroll_frame_1;
          }
      
          if (pos_scroll_frame_2 < 0) {
            temp_scroll_frame_2 = 0;
          } else if (pos_scroll_frame_2 > 1) {
            temp_scroll_frame_2 = 1;
          } else {
            temp_scroll_frame_2 = pos_scroll_frame_2;
          }
      
          if (pos_scroll_frame_3 < 0) {
            temp_scroll_frame_3 = 0;
          } else if (pos_scroll_frame_3 > 1) {
            temp_scroll_frame_3 = 1;
          } else {
            temp_scroll_frame_3 = pos_scroll_frame_3;
          }

          hold.css({
            '--scroll-frame-1': temp_scroll_frame_1,
            '--scroll-frame-2': temp_scroll_frame_2,
            '--scroll-frame-3': temp_scroll_frame_3
          });
        });
      };

      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
      <div className="climeight__introduction">
        <div className="climeight__introduction__container">
          <div className="climeight__video">
            <video muted autoPlay={"autoplay"} preLoad="metadata" playsInline loop>
                <source src={IntroductionSea} />
            </video>
          </div>
          
          <div className="climeight__introduction__effects">
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
            <img className="climeight__introduction__effects-smoke" src={ImageEffectSmoke} alt="" />
          </div>

          <div className="climeight__introduction__text">
            <p>Fahrrad fahren.</p>  
            <p>Klima retten.</p>  
            <p>Prämien verdienen.</p>  
          </div>
        </div>

        <div class="climeight_introduction__scroll-frame climeight_introduction__scroll-frame-1"></div>
				<div class="climeight_introduction__scroll-frame climeight_introduction__scroll-frame-2"></div>
				<div class="climeight_introduction__scroll-frame climeight_introduction__scroll-frame-3"></div>

        { /* To smoothize scrolling frame at the end */ }
				<div class="climeight_introduction__scroll-frame"></div>
      </div>
    )
}

export default IntroductionSection

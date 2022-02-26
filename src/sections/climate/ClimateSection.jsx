import React from 'react'
import $ from 'jquery';

import './css/ClimateSectionStyle.css'

import ClimateRain from '../../assets/videos/climate_rain.mp4';
import LogoCircular from '../../assets/climeight-assets/logo/circular/climeight-circular-logo_light.png';

const ClimateSection = (props) => {
    React.useEffect(() => {
      const handler = () => {
        $('.climeight__climate-section').each(function () {
          var hold = $(this);
      
          var pos_scroll_frame_1 = ((hold.find('.climeight__climate-section__scroll-frame-1').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__climate-section__scroll-frame-1').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_2 = ((hold.find('.climeight__climate-section__scroll-frame-2').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__climate-section__scroll-frame-2').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_3 = ((hold.find('.climeight__climate-section__scroll-frame-3').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__climate-section__scroll-frame-3').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_4 = ((hold.find('.climeight__climate-section__scroll-frame-4').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__climate-section__scroll-frame-4').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_5 = ((hold.find('.climeight__climate-section__scroll-frame-5').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__climate-section__scroll-frame-5').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_6 = ((hold.find('.climeight__climate-section__scroll-frame-6').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__climate-section__scroll-frame-6').outerHeight() * -1).toFixed(6);
          
          var temp_scroll_frame_1 = 0;
          var temp_scroll_frame_2 = 0;
          var temp_scroll_frame_3 = 0;
          var temp_scroll_frame_4 = 0;
          var temp_scroll_frame_5 = 0;
          var temp_scroll_frame_6 = 0;
      
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
                
          if (pos_scroll_frame_4 < 0) {
            temp_scroll_frame_4 = 0;
          } else if (pos_scroll_frame_4 > 1) {
            temp_scroll_frame_4 = 1;
          } else {
            temp_scroll_frame_4 = pos_scroll_frame_4;
          }
                
          if (pos_scroll_frame_5 < 0) {
            temp_scroll_frame_5 = 0;
          } else if (pos_scroll_frame_5 > 1) {
            temp_scroll_frame_5 = 1;
          } else {
            temp_scroll_frame_5 = pos_scroll_frame_5;
          }                
                
          if (pos_scroll_frame_6 < 0) {
            temp_scroll_frame_6 = 0;
          } else if (pos_scroll_frame_6 > 1) {
            temp_scroll_frame_6 = 1;
          } else {
            temp_scroll_frame_6 = pos_scroll_frame_6;
          }                

          hold.css({
            '--scroll-frame-1': temp_scroll_frame_1,
            '--scroll-frame-2': temp_scroll_frame_2,
            '--scroll-frame-3': temp_scroll_frame_3,
            '--scroll-frame-4': temp_scroll_frame_4,
            '--scroll-frame-5': temp_scroll_frame_5,
            '--scroll-frame-6': temp_scroll_frame_6
          });
        });
      };

      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
      <div className="climeight__climate-section">
        <div className="climeight__climate-section__container">
          <div className="climeight__climate-section__video">
            <video muted autoPlay={"autoplay"} preLoad="metadata" playsInline loop>
                <source src={ClimateRain} />
            </video>
          </div>

          <div className="climeight__climate-section__content">
            <p className="climeight__climate-section__text">Weshalb Klima schädigen wenn auch schützen möglich.</p>
            <p className="climeight__climate-section__text">Schütze die Erde, denn Sie existiert nur einmalig.</p>
            <p className="climeight__climate-section__text"><img src={LogoCircular} alt="" /></p>
          </div>
        </div>

        <div class="climeight__climate-section__scroll-frame climeight__climate-section__scroll-frame-1"></div>
        <div class="climeight__climate-section__scroll-frame climeight__climate-section__scroll-frame-2"></div>
        <div class="climeight__climate-section__scroll-frame climeight__climate-section__scroll-frame-3"></div>
        <div class="climeight__climate-section__scroll-frame climeight__climate-section__scroll-frame-4"></div>
        <div class="climeight__climate-section__scroll-frame climeight__climate-section__scroll-frame-5"></div>
        <div class="climeight__climate-section__scroll-frame climeight__climate-section__scroll-frame-6"></div>
        <div class="climeight__climate-section__scroll-frame"></div>
      </div>
    )
}

export default ClimateSection

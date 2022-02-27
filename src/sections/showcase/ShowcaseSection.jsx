import React from 'react'
import $ from 'jquery';

import './css/ShowcaseSectionStyle.css'

import MockupDashboard from '../../assets/mockups/mockup_showcase_dashboard.png';

const ShowcaseSection = (props) => {
    React.useEffect(() => {
      const handler = () => {
        $('.climeight__showcase-section').each(function () {
          var hold = $(this);
      
          var pos_scroll_frame_1 = ((hold.find('.climeight__showcase-section__scroll-frame-1').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__showcase-section__scroll-frame-1').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_2 = ((hold.find('.climeight__showcase-section__scroll-frame-2').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__showcase-section__scroll-frame-2').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_3 = ((hold.find('.climeight__showcase-section__scroll-frame-3').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__showcase-section__scroll-frame-3').outerHeight() * -1).toFixed(6);
          var pos_scroll_frame_4 = ((hold.find('.climeight__showcase-section__scroll-frame-4').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.climeight__showcase-section__scroll-frame-4').outerHeight() * -1).toFixed(6);
          
          var temp_scroll_frame_1 = 0;
          var temp_scroll_frame_2 = 0;
          var temp_scroll_frame_3 = 0;
          var temp_scroll_frame_4 = 0;
      
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

          hold.css({
            '--scroll-frame-1': temp_scroll_frame_1,
            '--scroll-frame-2': temp_scroll_frame_2,
            '--scroll-frame-3': temp_scroll_frame_3,
            '--scroll-frame-4': temp_scroll_frame_4
          });
        });
      };

      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }, []);
    
    return (
      <div className="climeight__showcase-section">
        <div className="climeight__showcase-section__container">
          <img src={MockupDashboard} alt="" />

          <ul>
              <li>
                  <div className="climeight__showcase-section__item">
                    <p className="climeight__showcase-section__text">Punkteanzahl</p>
                  </div>
              </li>
              <li>
                  <div className="climeight__showcase-section__item">
                    <p className="climeight__showcase-section__text">Dauer</p>
                  </div>
              </li>
              <li>
                  <div className="climeight__showcase-section__item">
                    <p className="climeight__showcase-section__text">Statistiken</p>
                  </div>
              </li>
              <li>
                  <div className="climeight__showcase-section__item">
                    <p className="climeight__showcase-section__text">Start / Stop</p>
                  </div>
              </li>
          </ul>
        </div>

        <div class="climeight__showcase-section__scroll-frame climeight__showcase-section__scroll-frame-1"></div>
        <div class="climeight__showcase-section__scroll-frame"></div>

        <div class="climeight__showcase-section__scroll-frame climeight__showcase-section__scroll-frame-2"></div>
        <div class="climeight__showcase-section__scroll-frame"></div>

        <div class="climeight__showcase-section__scroll-frame climeight__showcase-section__scroll-frame-3"></div>
        <div class="climeight__showcase-section__scroll-frame"></div>
        
        <div class="climeight__showcase-section__scroll-frame climeight__showcase-section__scroll-frame-4"></div>
        <div class="climeight__showcase-section__scroll-frame"></div>
      </div>
    )
}

export default ShowcaseSection

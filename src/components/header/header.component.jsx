import React, { Component } from 'react';
import ButtonSlide from '../button-slide/button-slide.components';
import { ReactComponent as LearningSvg } from '../../assets/undraw_studying.svg';
import './header.styles.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__decoration">&nbsp;</div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Sinau</span>
              <span className="heading-primary--sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </span>
            </h1>
            <ButtonSlide>Try out</ButtonSlide>
          </div>
          <div className="header__svg">
            <LearningSvg />
          </div>
        </div>

        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stop-color="#A854F0" />
                <stop offset="100%" stop-color="#735FF1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fill-opacity="1"
              d="M0,160L18.5,186.7C36.9,213,74,267,111,240C147.7,213,185,107,222,90.7C258.5,75,295,149,332,170.7C369.2,192,406,160,443,149.3C480,139,517,149,554,160C590.8,171,628,181,665,181.3C701.5,181,738,171,775,181.3C812.3,192,849,224,886,229.3C923.1,235,960,213,997,181.3C1033.8,149,1071,107,1108,122.7C1144.6,139,1182,213,1218,208C1255.4,203,1292,117,1329,112C1366.2,107,1403,181,1422,218.7L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Header;

import React from 'react';
import './connect.css';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

import ScrollToTop from "react-scroll-to-top";

import { Element } from "react-scroll";

export default function Connect() {

  return (
    <Element name="Contact" className="connect">
        <ScrollToTop smooth/>
        <div className="connect-wrap">
            <h2>Connect With Us On:</h2>
            <div className="socials">
                <div className="fb">
                    <a href="https://www.facebook.com/SalaamSwipe/">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <p>facebook</p>
                </div>
                <div className="tweet">
                    <a href="https://twitter.com/salaam_swipe">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <p>twitter</p>
                </div>
            </div>
        </div>
    </Element>
  );
}

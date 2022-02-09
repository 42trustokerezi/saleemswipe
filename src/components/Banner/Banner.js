import React from 'react';
import './banner.css';
import phone from '../../assets/iphone-image.png'

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner-wrap">
            <div className="banner-content">
                <div className="image">
                    <img src={phone} alt="phone" />
                </div>
                <div className="header-texts">
                    <h1>Saleem Swipe</h1>
                    <h2>Where Muslims Match and Meet.</h2>
                    <p>Saleem Swipe is an interactive matching application for Muslims.
                        We're going to revolutionize the way we meet one another
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

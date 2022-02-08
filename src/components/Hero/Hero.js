import React from 'react';
import './hero.css';
import phone from '../../assets/iphone-image.png';
import store from '../../assets/store.png';

export default function Hero() {
  return (
      <>
        <div className="bg-container">
            <div className="wrapper">
                <div className="left">
                    <div className="phone-wrapper">
                        <img className="phone" src={phone} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <div className="text">
                            <h3 className='text-title'>Saleem Swipe</h3>
                            <h3 className='text-title'>Where Muslims Match and Meet</h3>
                            <p className='text-body'>
                                Saleem Swipe is an interactive matching application for Muslims.
                                We're going to revolutionize the way we meet one another.
                            </p>
                            <img className="appstore" src={store} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

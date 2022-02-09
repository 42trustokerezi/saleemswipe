import React from 'react';
import './learn.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

import { Element } from "react-scroll";

export default function Learn() {
  return (
    <Element name="Learn" className="learn-content"> 
        <div className='content-wrap'>
            <h1>
                Want to Learn More?
            </h1>
            <h3>Take a look at the article written about us</h3>
            <div className="cards">
                <div className="card">
                    <a href="https://www.vice.com/en/article/d73ejy/of-course-theres-plans-for-a-muslim-tinder-too">
                        <img src={image1} alt="" />
                    </a>
                    <h3 className="card-title">
                        Vice Motherboard
                    </h3>
                    <p className="card-text">"Salaam Swipe will allow young Muslims to reach out to potential mates without interference"</p>
                </div>
                <div className="card">
                    <a href="https://www.buzzfeed.com/ghazalairshad/its-sunnah-to-swipe-with-your-right-hand-the-mus-19gpw">
                        <img src={image2} alt="" />
                    </a>
                    <h3 className="card-title">
                        BuzzFeed
                    </h3>
                    <p className="card-text">“I’m only using technology to take the biodata and put it in your hands instead of your grandmother’s."</p>
                </div>
                <div className="card">
                    <a href="https://www.sbs.com.au/news/article/2015/02/13/seeking-love-young-muslim-hipster-theres-app">
                        <img src={image3} alt="" />
                    </a>
                    <h3 className="card-title">
                        SBS Australia
                    </h3>
                    <p className="card-text">"Growing up as a Muslim in North America, I think we face a very big irony when it comes to relationships and marriage than any other community,"</p>
                </div>
            </div>
        </div>
        <hr className="dash"></hr>
    </Element>
  );
}

import React from 'react';
import './blog.css'

export default function Blog() {
  return (
    <div className="blog">
        <div className="faq-wrapper">
            <h1>FAQs and Policies</h1>
            <div className="faq-content">
                <div className="faq">
                    <a href="">
                        <h2>Frequently Asked Questions</h2>
                    </a>
                    <p>August 25, 2015...</p>
                </div>
                <div className="faq">
                    <a href="">
                        <h2>Terms of Use...</h2>
                    </a>
                    <p>August 4, 2015</p>
                </div>
                <div className="faq">
                    <a href="">
                        <h2>Privacy Policy</h2>
                    </a>
                    <p>June 13, 2015...</p>
                </div>
            </div>
        </div>
    </div>
  );
}

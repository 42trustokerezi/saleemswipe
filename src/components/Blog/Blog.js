import React from 'react';

export default function Blog() {
  return (
    <div className="blog">
        <div className="faq-wrapper">
            <h1>FAQs and Policies</h1>
            <div className="faq">
                <a href="">
                    <h2>Frequently Asked Questions</h2>
                </a>
                <p>August 25, 2015</p>
            </div>
            <div className="tou">
                <a href="">
                    <h2>Terms of Use</h2>
                </a>
                <p>August 4, 2015</p>
            </div>
            <div className="pri-po">
                <a href="">
                    <h2>Privacy Policy</h2>
                    <p>June 13, 2015</p>
                </a>
            </div>
        </div>
    </div>
  );
}

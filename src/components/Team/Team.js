import React from 'react';
import './team.css'

import { Element } from "react-scroll";

function Team() {
  return <div>
      <Element name="Team" className="content">
          <div className="wrap">
            <h3 className="team-title">About the Team</h3>
            <p className="team-body">
            We've put together the best team that we could find to give you the best experience possible on Salaam Swipe. Our team comes from all over the world and we're committed to our mission of changing the way we meet one another.
            </p>
          </div>
          <hr className="dash"></hr>
      </Element>
  </div>;
}

export default Team;

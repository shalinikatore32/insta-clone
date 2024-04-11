import React from 'react'
import "./homepage.css";
import Sidenavbar from './navigation/Sidenavbar';
import Timeline from './timeline/Timeline';

function Homepage() {
  return (
    <div className='homepage'>
      <div className="homepage_navele">
        <Sidenavbar />
      </div>
      <div className="homepage_timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default Homepage;

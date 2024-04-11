import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import "./sidenav.css";
function Sidenavbar() {
  return (
    <>
      <div className="sidenavbar">
        <img className='sidenav_logo' src="data:image/png;base64,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" alt="insta_icon" />
        <div className="sidenav_button">
          <button className="sidenav_buttons">
            <HomeIcon />
            <span>Home</span>
          </button>
          <button className="sidenav_buttons">
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className="sidenav_buttons">
            <ExploreIcon />
            <span>Explore</span>
          </button>
          <button className="sidenav_buttons">
            <SlideshowIcon />
            <span>Reels</span>
          </button>
          <button className="sidenav_buttons">
            <ChatIcon />
            <span>Messages</span>
          </button>
          <button className="sidenav_buttons">
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>
          <button className="sidenav_buttons">
            <AddCircleOutlineIcon />
            <span>Create</span>
          </button>
        </div>
        <div className="sidenav_more">
          <button className="sidenav_buttons">
            <MenuIcon />
            <span>More</span>
          </button>
        </div>

      </div>
    </>
  )
}

export default Sidenavbar
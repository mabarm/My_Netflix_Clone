import React from "react";
import "./Navbar.scss";
import NetflixLogo from "../../Image/Netflix-logo.png";
import ProfileImg from "../../Image/ProfileImg.png";
import { NotificationsActive, Search, ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={NetflixLogo} alt="netflix-logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>Kid</span>
          <NotificationsActive className="icons" />
          <img src={ProfileImg} alt="Profile" />
          <div class="profile">
            <ArrowDropDown className="icons" />
            <div class="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

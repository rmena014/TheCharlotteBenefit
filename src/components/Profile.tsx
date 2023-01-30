import React from "react";
import "./Profile.css";
import SideNavbar from "./SideNavBar";

const Profile: React.FC = () => {
  return (
    <div>
      <SideNavbar />
      <p> Welcome to your personal profile page</p>
    </div>
  );
};

export default Profile;

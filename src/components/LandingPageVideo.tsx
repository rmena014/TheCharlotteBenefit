import React from "react";
import "./LandingPageVideo.css";
import videoBG from "../assets/videoBG.mp4";
import { Link } from "react-router-dom";
import logoImage from "../images/TheCharlotteBenefit.webp";

const LandingPageVideo: React.FC = () => {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBG} autoPlay loop muted />
      </div>
      {/* <img className="cb-logo" src={logoImage} /> */}
      <div className="content">
        <Link to="/home">
          <div className="button-container">
            <button className="site-button">Enter the Charlotte Benefit</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageVideo;

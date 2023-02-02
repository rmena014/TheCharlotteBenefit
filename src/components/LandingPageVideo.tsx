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
      {/* <img className="cb-logo" src={logoImage} alt="Logo" /> */}
      <div className="content">
        <Link to="/home">
          <button className="site-button">Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageVideo;

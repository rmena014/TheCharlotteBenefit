import React from "react";
import "./Slider.css";

const Slider: React.FC = () => {
  return (
    <div>
      <div className="slider-container">
        <div>
          <div className="crossfade">
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

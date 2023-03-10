import React from "react";
import SignUpImage from "../images/istockphoto-1135341047-612x612.webp";
import LearnImage from "../images/learning-vs-training-cover.webp";
import ApplyImage from "../images/what-is-a-coding-project.webp";
import LoginImage from "../images/sale_25313_primary_image_wide.webp";
import "./AboutUsInfo.css";

interface AboutUsInfoProps {}

const AboutUsInfo: React.FC<AboutUsInfoProps> = () => {
  return (
    <div>
      <div
        className="cards-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={SignUpImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">1. Sign Up</div>
            <p className="text-gray-700 text-base">
              Convenient and easy registration process. Access to personalized
              learning paths and resources. Stay up-to-date with new tech
              content and courses.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #TECH!
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Simple
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Easy
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={LoginImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">2. Log In</div>
            <p className="text-gray-700 text-base">
              Log in to your account to access your personalized learning paths,
              up-to-date resources, and engaging courses.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JAVASCRIPT
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #CSS
            </span>
          </div>
        </div>{" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={LearnImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">3. Begin Learning</div>
            <p className="text-gray-700 text-base">
              Diverse range of courses and tutorials. Interactive and engaging
              learning experience. Learn at your own pace.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #PHP
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MachineLearning
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #ArtificialIntelligenceIsAWESOME!
            </span>
          </div>
        </div>{" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={ApplyImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">4. Apply and Repeat</div>
            <p className="text-gray-700 text-base">
              Put your skills into action and create projects. Build your
              resume, create your portfolio and the possibilities will be
              endless!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Projects!
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #RESUME!
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Portfolio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;

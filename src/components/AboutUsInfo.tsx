import React from "react";
import SignUpImage from "../images/istockphoto-1135341047-612x612.webp";
import LearnImage from "../images/learning-vs-training-cover.webp";
import ApplyImage from "../images/what-is-a-coding-project.webp";
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
              learning paths and resources. Stay up-to-date with new content and
              job opportunities.
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
            src={LearnImage}
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
            src={ApplyImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">3. Apply and Repeat</div>
            <p className="text-gray-700 text-base">
              Get connected with top tech companies. Get access to exclusive job
              listings and career events. Enhance your chances of landing your
              dream tech job.
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

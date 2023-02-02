import React from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";
import TextEditor from "../components/TextEditor";

const Practice: React.FC = () => {
  return (
    <div>
      <SideNavBar />
      <div className="practice-main">
        <h1>Welcome to the Sandbox!</h1>
        <p>
          This is still an extremely early build of this feature. It works
          however, to practice your HTML, CSS, and Javascript so have fun!
          <br /> The first box = HTML. Second Box = CSS. Third Box = Javascript
        </p>
        <TextEditor />
      </div>
    </div>
  );
};

export default Practice;

import React, { useState } from "react";
import "./SideNav.css";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const SideNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResourcesDropdown = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
  };

  return (
    <>
      <button className="openSide-btn" onClick={handleToggle}>
        <AiOutlineAppstoreAdd />
      </button>
      {isOpen && (
        <aside className="side-navbar">
          <button onClick={handleToggle} className="close-button2">
            Close
          </button>
          <nav>
            <ul className="side-navbar-list">
              <li className="side-navbar-list-item">
                <a href="#profile" className="side-navbar-list-item-link">
                  Profile
                </a>
              </li>
              <li className="side-navbar-list-item">
                <a
                  href="#resources"
                  className="side-navbar-list-item-link"
                  onClick={handleResourcesDropdown}
                >
                  Resources
                </a>
                {showResourcesDropdown && (
                  <ul className="resources-dropdown">
                    <li className="resources-dropdown-item">
                      <a
                        href="#resource1"
                        className="resources-dropdown-item-link"
                      >
                        Videos
                      </a>
                    </li>
                    <li className="resources-dropdown-item">
                      <a
                        href="#resource2"
                        className="resources-dropdown-item-link"
                      >
                        Courses
                      </a>
                    </li>
                    <li className="resources-dropdown-item">
                      <a
                        href="#resource3"
                        className="resources-dropdown-item-link"
                      >
                        Documentation
                      </a>
                    </li>
                    <li className="resources-dropdown-item">
                      <a
                        href="#resource3"
                        className="resources-dropdown-item-link"
                      >
                        Assesments
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="side-navbar-list-item">
                <a href="#courses" className="side-navbar-list-item-link">
                  Courses
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default SideNavbar;

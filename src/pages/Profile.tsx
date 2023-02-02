import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";

const Profile: React.FC = () => {
  const [user, setData] = useState({} as any);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      setError("No email found in local storage.");
      return;
    }
    fetch(`http://localhost:3001/api/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SideNavBar />
      <div className="profile-main">
        <h2>Hello {user.name}! Welcome to your profile page</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;

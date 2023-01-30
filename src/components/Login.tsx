import React, { useState } from "react";
import "./SignUp.css";
import LoginModal from "./LoginModal";

const Login: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  return (
    <div>
      <button
        className="bg-red-600 text-white rounded-lg py-2 px-4 transition duration-1000 ease-in-out hover:bg-red-500 mt-3"
        onClick={openModal}
      >
        Login
      </button>
      {showModal ? <LoginModal closeModal={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default Login;

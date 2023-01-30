import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { AiFillCloseSquare } from "react-icons/ai";

interface SignUpModalProps {
  closeModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        name,
        email,
        password,
        role,
      });
      console.log(response);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      navigate(`/profile`);
    }
  }, [submitted, navigate, name]);

  return (
    <div className="modal-overlay">
      <div className="modal-content p-6 rounded-lg shadow-md">
        <button onClick={closeModal} className="close-button">
          <AiFillCloseSquare />
        </button>
        <form onSubmit={handleSubmit} className="w-full flex flex-col ">
          <label className="block font-medium text-lg mb-2">Name:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Email:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Password:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Role:</label>
          <select
            className="border rounded-lg p-2 w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          <button className="bg-red-600 text-white rounded-lg py-2 px-4 hover:bg-red-500 mt-5 ">
            Sign Up
          </button>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default SignUpModal;
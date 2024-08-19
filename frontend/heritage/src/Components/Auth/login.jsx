// login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../axiosinstance";

import Header from "../Section/Header/header";
import Footer from "../Section/Footer/footer";

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    AxiosInstance.post("auth/login/", {
      username,
      password,
    })
      .then((response) => {
        if (response.status === 200) {
          login(true);
          console.log("Login successful");
          navigate("/profile"); // Redirect to the home page or a protected route
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((error) => {
        setError("Error logging in");
      });
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-md p-8 bg-slate-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={onLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUserNameChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {error && (
                <small className="text-red-500 block mt-2">{error}</small>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;

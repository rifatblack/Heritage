// Home.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Section/Header/header";
import Footer from "../Section/Footer/footer";

import AxiosInstance from "../../axiosinstance";

const Profile = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await AxiosInstance.get("auth/whoami/", {
          withCredentials: true,
        });
        setUserInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user info", error);
        setError(error.message);
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
        <div className="flex flex-col space-y-4">
          <h1 className="px-4 py-2 text-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            User: {userInfo.username}
          </h1>
          <h1 className="px-4 py-2  text-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Email: {userInfo.email}
          </h1>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

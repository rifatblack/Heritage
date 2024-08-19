import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getSession } from "./Components/Auth/getSession";
import { logout } from "./Components/Auth/logout";
import Login from "./Components/Auth/login";
import Profile from "./Components/Auth/profile";

import LandingPage from "./Components/landingPage";
import BuyerScreens from "./Components/buyerScreens";
import BuyerSearchResult from "./Components/buyerSearchResult";
import PropertyDetails from "./Components/propertyDetails";
import About from "./Components/about";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getSession(); // Await the response
        setIsAuthenticated(response.isAuthenticated);
        console.log(
          "Authenticated (check auth function):",
          response.isAuthenticated
        );
      } catch (error) {
        console.error("Error fetching session:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after checking auth
      }
    };

    checkAuth();
  }, []);

  const handleLogin = (authenticated) => {
    setIsAuthenticated(authenticated);
    console.log("Login successful: handle login function", authenticated);
  };

  const handleLogout = () => {
    try {
      logout();
      setIsAuthenticated(false);
      alert("You have been logged out.");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login login={handleLogin} />} />
        {isAuthenticated ? (
          <>
            <Route path="/buyer" element={<BuyerScreens />} />
            <Route path="/buyer/search" element={<BuyerSearchResult />} />
            <Route path="/buyer/property" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={<Profile logout={handleLogout} />}
            />

            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
};

export default App;

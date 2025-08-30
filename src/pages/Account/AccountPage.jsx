import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userInfo");
    if (storedUser) setUser(JSON.parse(storedUser));
    else navigate("/");
  }, [navigate]);

  const handlePasswordChange = async () => {
    if (!oldPassword || !newPassword) {
      setMessage("All password fields are required");
      return;
    }

    const token = sessionStorage.getItem("authToken");

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/update-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to update password");
      }

      setMessage("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      console.error(err);
      setMessage(err.message || "Failed to fetch");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="account-container">
      <h2>Account Details</h2>

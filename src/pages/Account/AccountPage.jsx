import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css"; // Make sure this CSS file exists

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Load user info from sessionStorage
  useEffect(() => {
    try {
      const storedUser = sessionStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        navigate("/"); // redirect to login if no user
      }
    } catch (err) {
      console.error("Failed to parse userInfo from sessionStorage:", err);
      navigate("/"); // redirect on parse error
    }
  }, [navigate]);

  // Handle password update
  const handlePasswordChange = async () => {
    if (!oldPassword || !newPassword) {
      setMessage("All password fields are required");
      return;
    }

    try {
      const token = sessionStorage.getItem("authToken");

      const res = await fetch(`${BACKEND_URL}/api/auth/update-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ token for backend
        },
        body: JSON.stringify({ oldPassword, newPassword }), // ✅ no userId needed
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update password");

      setMessage("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setMessage(err.message);
    }
  };

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userInfo");
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="account-container">
      <h2>Account Details</h2>
      <p>
        <strong>Name:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <h3>Change Password</h3>
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handlePasswordChange}>Update Password</button>

      <h3>Logout</h3>
      <button onClick={handleLogout}>Logout</button>

      {message && (
        <p className={message.includes("successfully") ? "message" : "error"}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AccountPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("userInfo"));
    if (storedUser) setUser(storedUser);
    else navigate("/"); // redirect to login if no user
  }, [navigate]);

  const handlePasswordChange = async () => {
    if (!oldPassword || !newPassword) return setMessage("All password fields are required");

    try {
      const res = await fetch("/api/auth/update-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          oldPassword,
          newPassword,
        }),
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

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userInfo");
    navigate("/"); // redirect to login
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2 class="h1">Account Details</h2>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h3 class="h3">Change Password</h3>
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
      <button class="log"onClick={handleLogout}>Logout</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Account;

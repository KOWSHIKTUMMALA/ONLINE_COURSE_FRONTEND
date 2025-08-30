import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginform.css";
import logimage from "../../assets/3958929.jpg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to login");
      }

      const data = await res.json();
      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("userInfo", JSON.stringify(data.user));
      navigate("/Home");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container" style={{ backgroundImage: `url(${logimage})` }}></div>
      <div className="login-page">
        <header>LearnCourseOnline</header>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <fieldset disabled={loading}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <span onClick={() => setShowPassword(!showPassword)} className="toggle-password-text">{showPassword ? "Hide" : "Show"}</span>
            <button type="submit">{loading ? "Logging in..." : "Login"}</button>
          </fieldset>
        </form>

        <p className="switch" onClick={() => navigate("/Sign")}>Don't have an account? Signup</p>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signupform.css";
import img from "../../assets/3958929.jpg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to signup");
      }

      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="image-container" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="signup-container">
        <header>LearnCourseOnline</header>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {success && <p className="success-message">Signup successful! Redirecting...</p>}

        <form onSubmit={handleSubmit}>
          <fieldset disabled={loading || success}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">{loading ? "Signing up..." : "Sign Up"}</button>
          </fieldset>
        </form>

        <p onClick={() => navigate("/")}>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default SignupForm;

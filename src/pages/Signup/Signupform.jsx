import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signupform.css";
import img from "../../assets/3958929.jpg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "password") checkPasswordStrength(value);
  };

  const checkPasswordStrength = (value) => {
    let strength = 0;
    if (value.length >= 6) strength++;
    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;
    setPasswordStrength(strength);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    else if (formData.username.length < 3) newErrors.username = "Username must be at least 3 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      const data = contentType?.includes("application/json") ? await res.json() : null;

      console.log("Signup response:", data);

      if (!res.ok) {
        if (res.status === 409) throw new Error("Email already exists");
        throw new Error(data?.message || "Signup failed");
      }

      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setErrorMessage(err.message || "Failed to signup");
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
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span className="field-error">{errors.username}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="field-error">{errors.password}</span>}

              {formData.password && (
                <div className="password-strength">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`strength-bar ${passwordStrength > i ? "active" : ""}`}></div>
                  ))}
                </div>
              )}
            </div>

            <button type="submit">{loading ? "Signing up..." : "Sign Up"}</button>
          </fieldset>
        </form>

        <p className="switch" onClick={() => navigate("/")} role="button" tabIndex={0}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

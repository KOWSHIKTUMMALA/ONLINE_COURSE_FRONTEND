import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginform.css";
import logimage from "../../assets/3958929.jpg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

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

  const handleSuccessfulLogin = (data) => {
    console.log("Login response:", data);
    if (data?.user && data?.token) {
      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("userInfo", JSON.stringify(data.user));
      navigate("/Home");
    } else {
      setErrorMessage("Invalid response from server");
    }
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

      const contentType = res.headers.get("content-type");
      const data = contentType?.includes("application/json") ? await res.json() : null;

      if (!res.ok) {
        if (res.status === 401) throw new Error("Invalid email or password");
        throw new Error(data?.message || "Login failed");
      }

      handleSuccessfulLogin(data);
    } catch (err) {
      setErrorMessage(err.message || "Failed to login");
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password-text"
                role="button"
                tabIndex={0}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <button type="submit">{loading ? "Logging in..." : "Login"}</button>
          </fieldset>
        </form>

        <div className="auth-links">
          <p className="switch" onClick={() => navigate("/Sign")} role="button" tabIndex={0}>
            Don't have an account? Signup
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

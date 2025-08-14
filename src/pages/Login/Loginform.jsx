import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginform.css";
import logimage from "../../assets/3958929.jpg";

// Use environment variable or fallback to local dev server
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSuccessfulLogin = (data) => {
    sessionStorage.setItem("authToken", data.token);
    sessionStorage.setItem("userInfo", JSON.stringify(data.user));
    navigate("/Home");
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
      const data =
        contentType && contentType.includes("application/json")
          ? await res.json()
          : null;

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
      <div
        className="image-container"
        style={{ backgroundImage: `url(${logimage})` }}
      ></div>

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
                autoComplete="username"
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
                autoComplete="current-password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password-text"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowPassword(!showPassword);
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <button type="submit">{loading ? "Logging in..." : "Login"}</button>
          </fieldset>
        </form>

        <div className="auth-links">
          <p
            className="switch"
            onClick={() => navigate("/Sign")}
            tabIndex={0}
            role="button"
          >
            Don't have an account? Signup
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

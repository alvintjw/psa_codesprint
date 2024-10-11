import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend login API
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        { email, password }
      );

      const { user } = response.data;

      // Store user information locally
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to the homepage upon successful login
      navigate("/home");
    } catch (err) {
      // Handle error response
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message); // Display the backend error message
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

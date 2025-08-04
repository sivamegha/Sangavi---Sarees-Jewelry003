import React, { useState } from "react";
import axios from "axios";
import "../style/Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp
      ? "http://localhost:5000/api/signup"
      : "http://localhost:5000/api/login";

    try {
      const response = await axios.post(url, form);
      alert(response.data.message || "Success!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to " + (isSignUp ? "signup" : "login"));
    }
  };

  return (
    <section className="full">
      <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Login</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To stay connected, please login with your credentials</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="ghost"
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="ghost"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

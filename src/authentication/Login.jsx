import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    navigate("/home");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "400px",
          textAlign: "left",
        }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Signin to your <br /> PopX account
        </h2>
        <p style={{ fontSize: "14px", color: "#777", marginBottom: "20px" }}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>

        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "5px",
            color: "#7a30ff",
          }}
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "14px",
            marginBottom: "15px",
          }}
        />

        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "5px",
            color: "#7a30ff",
          }}
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "14px",
            marginBottom: "15px",
          }}
        />

        {error && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor:
              formData.email && formData.password ? "#7a30ff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

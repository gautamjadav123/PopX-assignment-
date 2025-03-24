import React from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        textAlign: "start",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1px" }}>
        Welcome to PopX
      </h1>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Lorem ipsum dolore sit amt,
        <br /> consepture adipewscing elite,
      </p>
      <button
        onClick={() => navigate("/signup")}
        style={{
          minWidth: "300px",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          margin: "8px 0",
          backgroundColor: "#7a30ff",
          color: "white",
        }}
      >
        Create Account
      </button>
      <button
        onClick={() => navigate("/login")}
        style={{
          minWidth: "300px",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          margin: "8px 0",
          backgroundColor: "#d5b3ff",
          color: "#4a0072",
        }}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;

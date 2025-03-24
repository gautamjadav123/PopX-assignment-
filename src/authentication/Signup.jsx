import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const { fullName, phone, email, password, agency } = formData;

    if (fullName && phone && email && password && agency) {
      console.log("Form submitted successfully!");
      // You can replace this with navigation to /home
      navigate("/home");
      alert("Account created successfully! Redirecting to home...");
    } else {
      alert("Please fill all required fields!");
    }
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
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Create your PopX account
        </h2>

        {[
          { label: "Full Name", name: "fullName" },
          { label: "Phone number", name: "phone" },
          { label: "Email address", name: "email" },
          { label: "Password", name: "password" },
          { label: "Company name", name: "company" },
        ].map((field, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {field.label}{" "}
              {index < 4 && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
              type={field.name === "password" ? "password" : "text"}
              name={field.name}
              placeholder={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>
        ))}

        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Are you an Agency? <span style={{ color: "red" }}>*</span>
          </p>
          <label style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            No
          </label>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#7a30ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;

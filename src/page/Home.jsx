import React from "react";

const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        backgroundColor: "#fff",
        mt: "0",
        pt: "0",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "20px" }}>
        Account Settings
      </h2>
      <hr style={{ width: "100%", border: "1px solid #ccc" }} />

      <div
        style={{
          marginTop: "20px",
          width: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s"
              alt="Profile"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <label
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                backgroundColor: "#7a30ff",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              📷
              <input type="file" style={{ display: "none" }} />
            </label>
          </div>

          <div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "1px",
              }}
            >
              Marry Doe
            </p>
            <p style={{ fontSize: "14px", color: "#777" }}>Marry@Gmail.Com</p>
          </div>
        </div>

        <p
          style={{
            fontSize: "14px",
            marginTop: "15px",
            color: "#555",
            textAlign: "left",
          }}
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <hr style={{ borderStyle: "dashed", color: "grey" }} />
    </div>
  );
};

export default Home;

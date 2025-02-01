import React from "react";
import logo from "../../assets/ChurchLogo.png"; // Ensure this path is correct
import { Users, Shield } from "lucide-react";

const RoleSelection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #11468F)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with Logo and Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "3rem",
          marginTop: "2rem",
        }}
      >
        {/* Logo */}
        <div
          style={{
            backgroundColor: "#DA1212",
            borderRadius: "50%",
            padding: "1rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Church Logo"
            style={{
              width: "5rem",
              height: "5rem",
              objectFit: "contain",
            }}
          />
        </div>
        {/* App Name */}
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: "#FFFFFF",
            marginBottom: "0.5rem",
          }}
        >
          Transformers Builders
        </h1>
      </div>

      {/* Role Options */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "20rem",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <button
          style={{
            backgroundColor: "#EEEEEE",
            borderRadius: "1.5rem",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
            border: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#DCE7FF")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#EEEEEE")}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#11468F",
                borderRadius: "50%",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <Users style={{ width: "3rem", height: "3rem", color: "#EEEEEE" }} />
            </div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#7386D5",
                marginBottom: "0.5rem",
              }}
            >
              Church Member
            </h2>
            <p style={{ textAlign: "center", color: "#666666" }}>
              Contribute and track your donations
            </p>
          </div>
        </button>

        <button
          style={{
            backgroundColor: "#EEEEEE",
            borderRadius: "1.5rem",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
            border: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#FFD1D1")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#EEEEEE")}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#DA1212",
                borderRadius: "50%",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <Shield style={{ width: "3rem", height: "3rem", color: "#EEEEEE" }} />
            </div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#7386D5",
                marginBottom: "0.5rem",
              }}
            >
              Administrator
            </h2>
            <p style={{ textAlign: "center", color: "#666666" }}>
              Manage fundraising and members
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;

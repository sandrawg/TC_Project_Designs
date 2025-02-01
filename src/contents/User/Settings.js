import React from "react";
import { Settings as SettingsIcon, LogOut, Bell, User } from "lucide-react";

const SettingsPage = () => {
  const settingsOptions = [
    { icon: <User style={{ color: "#11468F", width: "1.5rem", height: "1.5rem" }} />, label: "Edit Profile" },
    { icon: <Bell style={{ color: "#11468F", width: "1.5rem", height: "1.5rem" }} />, label: "Notifications" },
    { icon: <LogOut style={{ color: "#DA1212", width: "1.5rem", height: "1.5rem" }} />, label: "Logout" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #11468F)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#FFFFFF",
      }}
    >
      {/* Settings Header */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          maxWidth: "24rem",
          width: "100%",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <SettingsIcon style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
        </div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#7386D5",
          }}
        >
          Settings
        </h2>

        {/* Settings Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {settingsOptions.map((option, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
                backgroundColor: "#F9F9F9",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EEEEEE")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F9F9F9")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {option.icon}
                <p style={{ fontSize: "1rem", color: "#7386D5", fontWeight: "bold" }}>{option.label}</p>
              </div>
              <span style={{ color: "#11468F", fontWeight: "bold" }}>&gt;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.9rem", color: "#EEEEEE" }}>
          Version 1.0 | © 2025 Church Fundraiser
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;

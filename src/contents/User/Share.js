import React from "react";
import { Share2, Facebook, Twitter, Mail } from "lucide-react";

const SharePage = () => {
  const shareOptions = [
    { icon: <Facebook style={{ color: "#1877F2", width: "1.5rem", height: "1.5rem" }} />, label: "Share on Facebook" },
    { icon: <Twitter style={{ color: "#1DA1F2", width: "1.5rem", height: "1.5rem" }} />, label: "Share on Twitter" },
    { icon: <Mail style={{ color: "#DA1212", width: "1.5rem", height: "1.5rem" }} />, label: "Share via Email" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #11468F)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          maxWidth: "24rem",
          width: "100%",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <Share2 style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Share the Fundraiser
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {shareOptions.map((option, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
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
                <p style={{ fontSize: "1rem", color: "#666666" }}>{option.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharePage;

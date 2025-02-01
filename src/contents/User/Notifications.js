import React from "react";
import { Bell, CheckCircle, XCircle } from "lucide-react";

const Notifications = () => {
  const notifications = [
    { id: 1, type: "success", message: "Your contribution was received successfully!" },
    { id: 2, type: "error", message: "Failed to process your last transaction." },
    { id: 3, type: "info", message: "The church has reached 50% of its fundraising goal!" },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle style={{ color: "#28a745", width: "1.5rem", height: "1.5rem" }} />;
      case "error":
        return <XCircle style={{ color: "#dc3545", width: "1.5rem", height: "1.5rem" }} />;
      case "info":
        return <Bell style={{ color: "#007bff", width: "1.5rem", height: "1.5rem" }} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8F9FA",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#7386D5",
          marginBottom: "1.5rem",
        }}
      >
        Notifications
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "24rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
        }}
      >
        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem",
              borderBottom: "1px solid #EEEEEE",
            }}
          >
            <div style={{ marginRight: "0.75rem" }}>{getIcon(notification.type)}</div>
            <p style={{ fontSize: "1rem", color: "#666666", flex: 1 }}>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

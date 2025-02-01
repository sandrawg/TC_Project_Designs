import React from 'react';
import { ChevronLeft, Bell, Target, TrendingUp, UserCheck, Clock } from 'lucide-react';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      icon: Target,
      title: "Target Milestone Reached!",
      message: "You've reached 75% of your monthly target.",
      time: "2 hours ago",
      type: "success"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Church Goal Update",
      message: "We're now at $750,000 - 75% of our goal.",
      time: "1 day ago",
      type: "info"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "New Contribution",
      message: "Your contribution of $500 was received.",
      time: "2 days ago",
      type: "success"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #11468F)",
        color: "#FFFFFF",
        padding: "1rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ChevronLeft style={{ color: "#FFFFFF", width: "2rem", height: "2rem" }} />
          <h1 style={{ marginLeft: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}>Notifications</h1>
        </div>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#FFFFFF",
            fontSize: "0.9rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Mark all read
        </button>
      </div>

      {/* Notification List */}
      <div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              display: "flex",
              alignItems: "start",
              marginBottom: "1rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "0.75rem",
              padding: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: "#7386D5",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "1rem",
                backgroundColor: notification.type === "success" ? "#DFF6DD" : "#DDEAFE",
              }}
            >
              <notification.icon
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: notification.type === "success" ? "#28A745" : "#11468F",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "1.1rem" }}>{notification.title}</h3>
              <p style={{ margin: "0.5rem 0", fontSize: "0.9rem", color: "#555555" }}>
                {notification.message}
              </p>
              <div style={{ display: "flex", alignItems: "center", fontSize: "0.8rem", color: "#888888" }}>
                <Clock style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                {notification.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#DA1212",
            fontSize: "1rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          View Earlier Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsPage;

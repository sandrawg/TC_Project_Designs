
import React from "react";
import { Menu, Bell, ArrowUpRight, ArrowDownRight } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EEEEEE",
        padding: "1.5rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#DA1212",
          padding: "1.5rem",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Menu style={{ width: "1.5rem", height: "1.5rem", color: "#FFFFFF" }} />
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginLeft: "0.75rem" }}>Admin Dashboard</h1>
          </div>
          <Bell style={{ width: "1.5rem", height: "1.5rem", color: "#FFFFFF" }} />
        </div>
      </div>

      {/* Statistics Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginTop: "-1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {["Total Raised", "Active Church Members"].map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#11468F",
              color: "#FFFFFF",
              borderRadius: "1rem",
              padding: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{stat}</p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {stat === "Total Raised" ? "$750,000" : "328"}
            </h2>
            <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
              <ArrowUpRight style={{ width: "1rem", height: "1rem", color: "#76c893", marginRight: "0.5rem" }} />
              <p style={{ fontSize: "0.8rem", color: "#76c893" }}>
                {stat === "Total Raised" ? "+12.5% this week" : "+24 this week"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1rem",
          padding: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "1.5rem",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Contribution Progress</h2>
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <p style={{ fontSize: "0.9rem", color: "#666666" }}>Progress to Goal</p>
            <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>75%</p>
          </div>
          <div style={{ height: "0.5rem", backgroundColor: "#EEEEEE", borderRadius: "0.25rem" }}>
            <div style={{ width: "75%", height: "100%", backgroundColor: "#DA1212", borderRadius: "0.25rem" }}></div>
          </div>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center" }}
        >
          {["$1M", "90 Days", "$2,287"].map((item, index) => (
            <div key={index}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{item}</h3>
              <p style={{ fontSize: "0.8rem", color: "#666666" }}>
                {index === 0 ? "Target" : index === 1 ? "Days Left" : "Avg Contribution"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Section */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1rem",
          padding: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Recent Activity</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {["New Contributors", "Total Contribution", "Avg. Contribution"].map((activity, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "0.9rem", color: "#666666" }}>{activity}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                {index === 2 ? (
                  <ArrowDownRight
                    style={{ width: "1rem", height: "1rem", color: "#DA1212", marginRight: "0.5rem" }}
                  />
                ) : (
                  <ArrowUpRight
                    style={{ width: "1rem", height: "1rem", color: "#76c893", marginRight: "0.5rem" }}
                  />
                )}
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: index === 2 ? "#DA1212" : "#76c893",
                  }}
                >
                  {index === 0 ? "+12" : index === 1 ? "+$5.2k" : "-$124"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

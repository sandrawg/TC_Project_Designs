import React, { useState } from "react";
import logo from "../../assets/ChurchLogo.png";
import {
  Bell,
  Home,
  Users,
  Target,
  Settings,
  BarChart2,
  MessageSquare,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";

const AdminDashboardWithSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#EEEEEE",
      }}
    >
      {/* Top Navigation Bar (For Mobile) */}
      <div
        style={{
          background: "#DA1212",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{ background: "transparent", border: "none", color: "white", cursor: "pointer" }}
        >
          <Menu size={24} />
        </button>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>Admin Dashboard</h1>
        <Bell size={24} color="white" />
      </div>

      {/* Sidebar for Larger Screens */}
      <div
        style={{
          position: "fixed",
          left: isSidebarOpen ? "0" : "-75%",
          top: "4rem",
          width: "75%",
          background: "#11468F",
          transition: "left 0.3s ease",
          padding: "1rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          zIndex: 999,
        }}
      >
        {/* Sidebar Header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <img src={logo} alt="Church Logo" style={{ width: "3rem", height: "3rem", marginRight: "1rem" }} />
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Transformers Builders</h2>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {[
            { icon: Home, label: "Dashboard" },
            { icon: Users, label: "Members" },
            { icon: Target, label: "Targets" },
            { icon: BarChart2, label: "Analytics" },
            { icon: MessageSquare, label: "Messages" },
            { icon: Settings, label: "Settings" },
            { icon: HelpCircle, label: "Help Center" },
          ].map((item, index) => (
            <button
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "0.8rem",
                borderRadius: "0.5rem",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.3s",
                marginBottom: "0.5rem",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1A4E95")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <item.icon size={20} />
              <span style={{ marginLeft: "1rem" }}>{item.label}</span>
            </button>
          ))}

          {/* Logout Button */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "0.8rem",
              borderRadius: "0.5rem",
              backgroundColor: "transparent",
              color: "#FF6B6B",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              marginTop: "2rem",
            }}
          >
            <LogOut size={20} />
            <span style={{ marginLeft: "1rem" }}>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ paddingTop: "5rem", flex: 1 }}>
        {/* Stats Section */}
        <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ background: "#11468F", borderRadius: "1rem", padding: "1rem", color: "white" }}>
            <h2>Total Raised</h2>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>$750,000</p>
            <p style={{ color: "lightgreen" }}>+12.5% this week</p>
          </div>
          <div style={{ background: "#11468F", borderRadius: "1rem", padding: "1rem", color: "white" }}>
            <h2>Active Members</h2>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>328</p>
            <p style={{ color: "lightgreen" }}>+24 this week</p>
          </div>
        </div>

        {/* Progress Section */}
        <div style={{ padding: "1rem" }}>
          <div style={{ background: "white", borderRadius: "1rem", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h2>Contribution Progress</h2>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span>Progress to Goal</span>
                <span>75%</span>
              </div>
              <div style={{ background: "#ccc", borderRadius: "5px", height: "6px", width: "100%" }}>
                <div style={{ background: "#DA1212", borderRadius: "5px", height: "6px", width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (For Mobile) */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#11468F",
          padding: "0.8rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {[Home, Users, Target, Settings].map((Icon, index) => (
          <button key={index} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
            <Icon size={24} color="white" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardWithSidebar;

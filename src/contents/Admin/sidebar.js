import React, { useState } from "react";
import logo from "../../assets/ChurchLogo.png";
import {
  Menu,
  Bell,
  Home,
  Users,
  Target,
  Settings,
  BarChart2,
  MessageSquare,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronLeft,
  PieChart,
} from "lucide-react";

const AdminDashboardWithSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#EEEEEE" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isExpanded ? "18rem" : "5rem",
          background: "#11468F",
          transition: "width 0.3s ease",
          padding: "1rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: isExpanded ? "flex-start" : "center",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar Header */}
        <div style={{ width: "100%", display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <div
            style={{
              backgroundColor: "#DA1212",
              borderRadius: "50%",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: isExpanded ? "1rem" : "0",
            }}
          >
            <img
              src={logo}
              alt="Church Logo"
              style={{ width: "3rem", height: "3rem", objectFit: "contain" }}
            />
          </div>
          {isExpanded && <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Transformers Project</h2>}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            marginBottom: "2rem",
            alignSelf: isExpanded ? "flex-end" : "center",
          }}
        >
          {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>

        {/* Navigation Links */}
        <nav style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {[
            { icon: Home, label: "Dashboard", isActive: true },
            { icon: Users, label: "Members" },
            { icon: Target, label: "Targets" },
            { icon: BarChart2, label: "Analytics" },
            { icon: PieChart, label: "Reports" },
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
                backgroundColor: item.isActive ? "#DA1212" : "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.3s",
                marginBottom: "0.5rem",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1A4E95")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = item.isActive ? "#DA1212" : "transparent")}
            >
              <item.icon size={20} />
              {isExpanded && <span style={{ marginLeft: "1rem" }}>{item.label}</span>}
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
              transition: "background 0.3s",
              marginTop: "2rem",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1A4E95")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <LogOut size={20} />
            {isExpanded && <span style={{ marginLeft: "1rem" }}>Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, paddingLeft: isExpanded ? "1.5rem" : "1rem", paddingRight: "1rem", transition: "all 0.3s ease" }}>
        {/* Header */}
<div style={{ background: "#DA1212", padding: "1.5rem" }}>
  <div
    style={{
      maxWidth: "500px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "white" }}>Admin Dashboard</h1>
    <Bell size={24} color="white" />
  </div>
</div>


        {/* Stats Section */}
        <div style={{ padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ background: "#11468F", borderRadius: "1rem", padding: "2rem", color: "white" }}>
            <h2>Total Raised</h2>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>$750,000</p>
            <p style={{ color: "lightgreen" }}>+12.5% this week</p>
          </div>
          <div style={{ background: "#11468F", borderRadius: "1rem", padding: "2rem", color: "white" }}>
            <h2>Active Church Members</h2>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>328</p>
            <p style={{ color: "lightgreen" }}>+24 this week</p>
          </div>
        </div>

        {/* Fundraising Progress Section */}
        <div style={{ padding: "2rem" }}>
          <div style={{ background: "white", borderRadius: "1rem", padding: "2rem", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h2>Contribution Progress</h2>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span>Progress to Goal</span>
                <span>75%</span>
              </div>
              <div style={{ background: "#ccc", borderRadius: "5px", height: "10px", width: "100%" }}>
                <div style={{ background: "#DA1212", borderRadius: "5px", height: "10px", width: "75%" }}></div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center", marginTop: "1rem" }}>
              <div>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$1M</p>
                <p>Target</p>
              </div>
              <div>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>90 Days</p>
                <p>Remaining</p>
              </div>
              <div>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$2,287</p>
                <p>Avg Donation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardWithSidebar;

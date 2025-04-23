import React, { useState } from "react";
import { Download, Mail, FileText, Calendar, TrendingUp } from "lucide-react";

const ReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState("weekly");
  
  const handleReportTypeChange = (type) => {
    setSelectedReport(type);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #DA1212, #7386D5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
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
          <FileText style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Reports
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.9rem", color: "#666666", marginBottom: "0.75rem" }}>
            Select report period:
          </p>
          
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {["weekly", "monthly", "quarterly"].map((period) => (
              <button
                key={period}
                onClick={() => handleReportTypeChange(period)}
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  backgroundColor: selectedReport === period ? "#7386D5" : "#F1F1F1",
                  color: selectedReport === period ? "#FFFFFF" : "#666666",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: selectedReport === period ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
          
          <div style={{ marginBottom: "1.5rem", backgroundColor: "#F9F9F9", padding: "1rem", borderRadius: "0.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", color: "#666666" }}>Total Raised:</span>
              <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#333333" }}>$24,850</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", color: "#666666" }}>Contributors:</span>
              <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#333333" }}>78</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", color: "#666666" }}>Pending Targets:</span>
              <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#333333" }}>$15,150</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.875rem", color: "#666666" }}>Growth:</span>
              <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#11B026", display: "flex", alignItems: "center" }}>
                <TrendingUp size={14} style={{ marginRight: "0.25rem" }} /> 12.4%
              </span>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <button
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#DA1212",
                color: "#FFFFFF",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                fontSize: "0.875rem",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A10E0E")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DA1212")}
            >
              <Download size={16} style={{ marginRight: "0.5rem" }} /> PDF
            </button>
            <button
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#7386D5",
                color: "#FFFFFF",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                fontSize: "0.875rem",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5C6BC0")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#7386D5")}
            >
              <Download size={16} style={{ marginRight: "0.5rem" }} /> Excel
            </button>
          </div>
          
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1F1F1",
              color: "#666666",
              padding: "0.75rem",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#E5E5E5")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F1F1F1")}
          >
            <Mail size={16} style={{ marginRight: "0.5rem" }} /> Email Report
          </button>
        </div>
        
        <div style={{ marginTop: "1rem" }}>
          <p style={{ fontSize: "0.75rem", textAlign: "center", color: "#999999" }}>
            Last updated: <Calendar size={12} style={{ display: "inline", marginBottom: "-0.1rem" }} /> April 2, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
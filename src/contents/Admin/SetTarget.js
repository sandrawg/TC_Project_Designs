import React, { useState } from 'react';
import { ChevronLeft, Calendar, Target, Clock, AlertCircle } from 'lucide-react';

const AdminSetTarget = () => {
  const [targetAmount, setTargetAmount] = useState(1000000);
  const [duration, setDuration] = useState(12);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #11468F)",
        padding: "1.5rem",
        color: "#FFFFFF",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
        <ChevronLeft style={{ color: "#FFFFFF", width: "2rem", height: "2rem" }} />
        <h1 style={{ marginLeft: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}>
          Update Target
        </h1>
      </div>

      {/* Form Container */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1rem",
          padding: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "#7386D5",
        }}
      >
        {/* Contribution Goal */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontSize: "1rem", marginBottom: "0.5rem" }}>
            Contribution Goal ($)
          </label>
          <div style={{ position: "relative" }}>
            <Target
              style={{
                position: "absolute",
                left: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#11468F",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 0.5rem 0.75rem 2.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #CCCCCC",
                fontSize: "1.25rem",
                color: "#7386D5",
              }}
            />
          </div>
        </div>

        {/* Contribution Duration */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontSize: "1rem", marginBottom: "0.5rem" }}>
            Contribution Duration
          </label>
          <div style={{ position: "relative" }}>
            <Clock
              style={{
                position: "absolute",
                left: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#11468F",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 0.5rem 0.75rem 2.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #CCCCCC",
                fontSize: "1.25rem",
                color: "#7386D5",
                background: "#F9F9F9",
              }}
            >
              <option value={3}>3 Months</option>
              <option value={6}>6 Months</option>
              <option value={12}>12 Months</option>
              <option value={24}>24 Months</option>
            </select>
          </div>
        </div>

        {/* Required Monthly Goal */}
        <div style={{ marginBottom: "1.5rem", padding: "1rem", backgroundColor: "#EEEEEE", borderRadius: "0.5rem" }}>
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Required Monthly Goal:{" "}
            <strong style={{ color: "#DA1212" }}>
              ${(targetAmount / duration).toFixed(2)}
            </strong>
          </p>
        </div>

        {/* Important Notes */}
        <div style={{ marginBottom: "1.5rem", padding: "1rem", backgroundColor: "#E8F4FF", borderRadius: "0.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#11468F" }}>
            <AlertCircle style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
            Important Notes
          </h3>
          <ul style={{ paddingLeft: "1rem", listStyle: "disc", fontSize: "0.9rem", color: "#555555" }}>
            <li>Current progress will be recalculated based on the new target.</li>
            <li>All contributors notifications will be updated.</li>
            <li>Contribution timeline will be adjusted accordingly.</li>
          </ul>
        </div>

        {/* Update Button */}
        <button
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#DA1212",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#BF0F0F")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#DA1212")}
        >
          Update Contribution Target
        </button>
      </div>
    </div>
  );
};

export default AdminSetTarget;

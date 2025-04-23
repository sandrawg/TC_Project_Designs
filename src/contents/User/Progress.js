import React from "react";
import { BarChart2 } from "lucide-react";

const ProgressPage = () => {
  const progressData = {
    totalGoal: 1000000,
    amountRaised: 750000,
    percentage: 75,
  };

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
          <BarChart2 style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Contribution Progress
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "1rem", color: "#666666", marginBottom: "0.5rem" }}>
            Total Goal: <strong>KES {progressData.totalGoal.toLocaleString()}</strong>
          </p>
          <p style={{ fontSize: "1rem", color: "#666666", marginBottom: "0.5rem" }}>
            Amount Raised: <strong>KES {progressData.amountRaised.toLocaleString()}</strong>
          </p>
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "0.9rem", color: "#666666" }}>Progress</p>
              <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{progressData.percentage}%</p>
            </div>
            <div style={{ height: "0.5rem", backgroundColor: "#EEEEEE", borderRadius: "0.25rem" }}>
              <div
                style={{
                  width: `KES {progressData.percentage}%`,
                  height: "100%",
                  backgroundColor: "#DA1212",
                  borderRadius: "0.25rem",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          {[
            { label: "Goal", value: `KES KES {progressData.totalGoal.toLocaleString()}` },
            { label: "Raised", value: `KES KES {progressData.amountRaised.toLocaleString()}` },
            { label: "Remaining", value: `KES KES {(progressData.totalGoal - progressData.amountRaised).toLocaleString()}` },
          ].map((item, index) => (
            <div key={index}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{item.value}</h3>
              <p style={{ fontSize: "0.8rem", color: "#666666" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;

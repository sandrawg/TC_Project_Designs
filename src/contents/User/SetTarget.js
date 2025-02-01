import React, { useState } from "react";
import { Target, CheckCircle } from "lucide-react";

const SetTargetPage = () => {
  const [target, setTarget] = useState(1000);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (target > 0) {
      setSuccess(true);
    }
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
          <Target style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Set Your Contribution Target
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="target"
            style={{ display: "block", marginBottom: "0.5rem", fontSize: "1rem", color: "#666666" }}
          >
            Enter Target Amount
          </label>
          <input
            id="target"
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "1px solid #CCCCCC",
              fontSize: "1rem",
              outline: "none",
              backgroundColor: "#F9F9F9",
            }}
          />
        </div>

        <button
          style={{
            width: "100%",
            backgroundColor: "#DA1212",
            color: "#FFFFFF",
            padding: "0.75rem",
            borderRadius: "0.75rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A10E0E")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DA1212")}
          onClick={handleSubmit}
        >
          Set Target
        </button>

        {success && (
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              borderRadius: "0.75rem",
              backgroundColor: "#E7F9ED",
              textAlign: "center",
              color: "#28a745",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <CheckCircle style={{ width: "1.5rem", height: "1.5rem" }} />
            Target Set Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default SetTargetPage;

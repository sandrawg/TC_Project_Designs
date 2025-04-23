import React from "react";
import { UserCheck, Shield, XCircle, CheckCircle } from "lucide-react";

const AdminAccess = () => {
  const currentAdmins = [
    { name: "David Adeoye", email: "DAdeoye@church.org", role: "Main Admin" },
    { name: "Deacon Okoye", email: "Okoye@church.org", role: "Admin" },
  ];

  const pendingRequests = [
    { name: "Mark Otieno", email: "mark@church.org" },
    { name: "Rachel Njeri", email: "rachel@church.org" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #041562, #11468F)",
        padding: "1.5rem",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Admin Access
      </h1>

      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#041562",
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Current Admins
        </h2>
        {currentAdmins.map((admin, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
              background: "#F1F5FF",
              borderRadius: "0.75rem",
              padding: "0.75rem 1rem",
            }}
          >
            <div>
              <p style={{ fontWeight: "bold" }}>{admin.name}</p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{admin.email}</p>
            </div>
            <span
              style={{
                padding: "0.25rem 0.75rem",
                backgroundColor: admin.role === "Main Admin" ? "#DA1212" : "#11468F",
                color: "#fff",
                borderRadius: "1rem",
                fontSize: "0.75rem",
              }}
            >
              {admin.role}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#041562",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Pending Requests
        </h2>
        {pendingRequests.map((user, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
              background: "#FFF5F5",
              borderRadius: "0.75rem",
              padding: "0.75rem 1rem",
            }}
          >
            <div>
              <p style={{ fontWeight: "bold" }}>{user.name}</p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{user.email}</p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                style={{
                  background: "#11468F",
                  border: "none",
                  borderRadius: "50%",
                  padding: "0.5rem",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <CheckCircle size={18} />
              </button>
              <button
                style={{
                  background: "#DA1212",
                  border: "none",
                  borderRadius: "50%",
                  padding: "0.5rem",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <XCircle size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAccess;
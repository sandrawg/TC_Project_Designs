import React, { useState } from "react";
import { Mail, Lock, User, Shield } from "lucide-react";

const AdminLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: isLogin
          ? "linear-gradient(to bottom, #DA1212, #7386D5)"
          : "linear-gradient(to bottom, #7386D5, #DA1212)",
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
          <Shield style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Admin {isLogin ? "Login" : "Registration"}
        </h2>

        {isLogin ? (
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ marginBottom: "1rem", position: "relative" }}>
              <Mail
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#666666",
                  position: "absolute",
                  top: "50%",
                  left: "1rem",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                type="email"
                placeholder="Admin Email"
                style={{
                  width: "80%",
                  padding: "0.75rem 1rem 0.75rem 3rem",
                  borderRadius: "0.75rem",
                  border: "1px solid #CCCCCC",
                  fontSize: "1rem",
                  outline: "none",
                  backgroundColor: "#F9F9F9",
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem", position: "relative" }}>
              <Lock
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#666666",
                  position: "absolute",
                  top: "50%",
                  left: "1rem",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "80%",
                  padding: "0.75rem 1rem 0.75rem 3rem",
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
            >
              Login
            </button>
          </div>
        ) : (
          <div style={{ marginBottom: "1.5rem" }}>
            {["Admin Name", "Admin Email", "Password", "Confirm Password"].map((placeholder, index) => (
              <div key={index} style={{ marginBottom: "1rem", position: "relative" }}>
                {(index === 0 && <User style={{ ...iconStyle }} />) ||
                  (index === 1 && <Mail style={{ ...iconStyle }} />) ||
                  <Lock style={{ ...iconStyle }} />}
                <input
                  type={index > 1 ? "password" : "text"}
                  placeholder={placeholder}
                  style={inputStyle}
                />
              </div>
            ))}
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7386D5")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#11468F")}
            >
              Register
            </button>
          </div>
        )}

        <p
          style={{
            fontSize: "0.875rem",
            textAlign: "center",
            color: "#666666",
          }}
        >
          {isLogin ? (
            <>
              Need an account?{" "}
              <span
                style={{ color: "#DA1212", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have access?{" "}
              <span
                style={{ color: "#11468F", cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const iconStyle = {
  width: "1.25rem",
  height: "1.25rem",
  color: "#666666",
  position: "absolute",
  top: "50%",
  left: "1rem",
  transform: "translateY(-50%)",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem 0.75rem 3rem",
  borderRadius: "0.75rem",
  border: "1px solid #CCCCCC",
  fontSize: "1rem",
  outline: "none",
  backgroundColor: "#F9F9F9",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#11468F",
  color: "#FFFFFF",
  padding: "0.75rem",
  borderRadius: "0.75rem",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default AdminLogin;

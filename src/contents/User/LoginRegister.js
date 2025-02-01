import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

const UserLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: isLogin
          ? "linear-gradient(to bottom, #11468F, #7386D5)"
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
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <User style={{ width: "3rem", height: "3rem", color: isLogin ? "#11468F" : "#DA1212" }} />
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
          {isLogin ? "User Login" : "User Registration"}
        </h2>

        {/* Form Section */}
        {isLogin ? (
          <div>
            <div style={inputWrapperStyle}>
              <Mail style={iconStyle} />
              <input type="email" placeholder="Email Address" style={inputStyle} />
            </div>
            <div style={inputWrapperStyle}>
              <Lock style={iconStyle} />
              <input type="password" placeholder="Password" style={inputStyle} />
            </div>
            <button style={loginButtonStyle}>Login</button>
          </div>
        ) : (
          <div>
            {["Full Name", "Email Address", "Password", "Confirm Password"].map((placeholder, index) => (
              <div key={index} style={inputWrapperStyle}>
                {(index === 0 && <User style={iconStyle} />) ||
                  (index === 1 && <Mail style={iconStyle} />) ||
                  <Lock style={iconStyle} />}
                <input type={index > 1 ? "password" : "text"} placeholder={placeholder} style={inputStyle} />
              </div>
            ))}
            <button style={registerButtonStyle}>Register</button>
          </div>
        )}

        {/* Switch Between Login and Registration */}
        <p
          style={{
            fontSize: "0.875rem",
            textAlign: "center",
            marginTop: "1.5rem",
            color: "#666666",
          }}
        >
          {isLogin ? (
            <>
              Need an account?{" "}
              <span
                style={{ color: "#11468F", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                style={{ color: "#DA1212", cursor: "pointer" }}
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

const inputWrapperStyle = {
  marginBottom: "1rem",
  position: "relative",
};

const inputStyle = {
  width: "80%",
  padding: "0.75rem 1rem 0.75rem 3rem",
  borderRadius: "0.75rem",
  border: "1px solid #CCCCCC",
  fontSize: "1rem",
  outline: "none",
  backgroundColor: "#F9F9F9",
};

const loginButtonStyle = {
  width: "80%",
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

const registerButtonStyle = {
  ...loginButtonStyle,
  backgroundColor: "#DA1212",
};

export default UserLoginRegister;

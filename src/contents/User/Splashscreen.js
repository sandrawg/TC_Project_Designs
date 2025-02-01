import React from "react";
import logo from "../../assets/ChurchLogo.png";

const Splashscreen = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #11468F)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        padding: "1.5rem",
      }}
    >
      {/* Logo Container */}
      <div
        style={{
          backgroundColor: "#DA1212",
          borderRadius: "98%",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Church Logo"
          style={{
            width: "15rem",
            height: "15rem",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "1rem 0 0",
        }}
      >
        Transformers Builders
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "1rem",
          textAlign: "center",
          opacity: 0.9,
          marginTop: "0.5rem",
        }}
      >
        Tujenge Kanisa
      </p>
    </div>
  );
};

export default Splashscreen;

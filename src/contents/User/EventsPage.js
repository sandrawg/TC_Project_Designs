import React from "react";
import { Calendar, MapPin, UserPlus } from "lucide-react";

const EventsPage = () => {
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
          <Calendar style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Upcoming Events
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          {[
            { 
              title: "Fundraising Gala", 
              date: "June 15, 2025", 
              location: "Community Center, Main Hall" 
            },
            { 
              title: "Charity Run", 
              date: "July 20, 2025", 
              location: "City Park, Downtown" 
            },
            { 
              title: "Fundraising Workshop", 
              date: "August 5, 2025", 
              location: "Church Community Room" 
            }
          ].map((event, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "0.75rem",
                padding: "1rem",
                marginBottom: "1rem",
                border: "1px solid #CCCCCC"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ 
                  fontSize: "1.125rem", 
                  fontWeight: "bold", 
                  color: "#7386D5" 
                }}>
                  {event.title}
                </h3>
                <div 
                  style={{
                    backgroundColor: "#DA1212",
                    color: "#FFFFFF",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.75rem"
                  }}
                >
                  {event.date}
                </div>
              </div>
              
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                color: "#666666", 
                marginBottom: "0.5rem" 
              }}>
                <MapPin style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                <span style={{ fontSize: "0.875rem" }}>{event.location}</span>
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A10E0E")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DA1212")}
              >
                <UserPlus style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }} />
                Sign Up
              </button>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.875rem",
            textAlign: "center",
            color: "#666666",
          }}
        >
          Need help? <span style={{ color: "#DA1212", cursor: "pointer" }}>Contact Support</span>
        </p>
      </div>
    </div>
  );
};

export default EventsPage;
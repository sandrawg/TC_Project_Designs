import React from "react";
import { ArrowLeft, Clock, Calendar, DollarSign } from "lucide-react";

const DonationHistory = () => {
  const donations = [
    { 
      date: "Mar 15, 2025", 
      amount: 10000, 
      method: "M-Pesa" 
    },
    { 
      date: "Feb 20, 2025", 
      amount: 5000, 
      method: "Bank Transfer" 
    },
    { 
      date: "Jan 10, 2025", 
      amount: 15000, 
      method: "Credit Card" 
    },
    { 
      date: "Dec 5, 2024", 
      amount: 7500, 
      method: "Cash" 
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7386D5, #7386D5)",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
      }}
    >
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        marginBottom: "1.5rem" 
      }}>
        <ArrowLeft 
          style={{ 
            color: "white", 
            marginRight: "1rem" 
          }} 
        />
        <h2 
          style={{ 
            color: "white", 
            fontSize: "1.5rem", 
            fontWeight: "bold" 
          }}
        >
          Donation History
        </h2>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1.5rem",
          padding: "2rem",
          flex: 1,
        }}
      >
        <div 
          style={{
            backgroundColor: "#F0F4FF",
            borderRadius: "0.75rem",
            padding: "1rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <DollarSign 
            style={{ 
              color: "#7386D5", 
              marginRight: "1rem" 
            }} 
          />
          <div>
            <p 
              style={{ 
                color: "#7386D5", 
                fontWeight: "bold" 
              }}
            >
              Total Donated
            </p>
            <p 
              style={{ 
                fontSize: "1.25rem", 
                fontWeight: "bold" 
              }}
            >
              KES 37,500
            </p>
          </div>
        </div>

        {donations.map((donation, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "0.75rem",
              padding: "1rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #E0E0E0"
            }}
          >
            <div>
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginBottom: "0.5rem" 
                }}
              >
                <Calendar 
                  style={{ 
                    width: "1rem", 
                    height: "1rem", 
                    marginRight: "0.5rem", 
                    color: "#7386D5" 
                  }} 
                />
                <p 
                  style={{ 
                    color: "#7386D5", 
                    fontWeight: "bold" 
                  }}
                >
                  {donation.date}
                </p>
              </div>
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center" 
                }}
              >
                <Clock 
                  style={{ 
                    width: "1rem", 
                    height: "1rem", 
                    marginRight: "0.5rem", 
                    color: "#7386D5" 
                  }} 
                />
                <p 
                  style={{ 
                    color: "#666666" 
                  }}
                >
                  {donation.method}
                </p>
              </div>
            </div>
            <p 
              style={{ 
                fontWeight: "bold", 
                color: "#7386D5" 
              }}
            >
              KES {donation.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationHistory;
import React, { useState } from "react";
import { CreditCard, DollarSign, CheckCircle, Smartphone } from "lucide-react";

const PaymentPage = () => {
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (amount > 0) {
      setPaymentSuccess(true); // Simulates successful payment
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
        justifyContent: "center",
        color: "#FFFFFF",
      }}
    >
      {/* Payment Card */}
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
          <CreditCard style={{ width: "3rem", height: "3rem", color: "#DA1212" }} />
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
          Make a Payment
        </h2>

        {/* Amount Input */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <DollarSign
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
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 3rem",
                borderRadius: "0.75rem",
                border: "1px solid #CCCCCC",
                fontSize: "1rem",
                outline: "none",
                backgroundColor: "#F9F9F9",
              }}
            />
          </div>
        </div>

        {/* Payment Method Selection */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", color: "#7386D5", marginBottom: "0.5rem" }}>
            Select Payment Method:
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <button
              onClick={() => setPaymentMethod("Card")}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.75rem",
                backgroundColor: paymentMethod === "Card" ? "#DA1212" : "#EEEEEE",
                color: paymentMethod === "Card" ? "#FFFFFF" : "#7386D5",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Card
            </button>
            <button
              onClick={() => setPaymentMethod("PayPal")}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.75rem",
                backgroundColor: paymentMethod === "PayPal" ? "#DA1212" : "#EEEEEE",
                color: paymentMethod === "PayPal" ? "#FFFFFF" : "#7386D5",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              PayPal
            </button>
            <button
              onClick={() => setPaymentMethod("M-Pesa")}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.75rem",
                backgroundColor: paymentMethod === "M-Pesa" ? "#DA1212" : "#EEEEEE",
                color: paymentMethod === "M-Pesa" ? "#FFFFFF" : "#7386D5",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              M-Pesa
            </button>
          </div>
        </div>

        {/* Pay Button */}
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
          onClick={handlePayment}
        >
          Pay Now
        </button>

        {/* Success Message */}
        {paymentSuccess && (
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
            Payment Successful!
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;

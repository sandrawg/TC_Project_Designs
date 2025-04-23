import React, { useState } from "react";
import { ArrowLeft, Search, Filter, User, Phone, Mail, DollarSign, MoreVertical, MessageSquare, Trash2, X } from "lucide-react";

const AdminMembersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const members = [
    { 
      id: 1,
      name: "John Kamau", 
      email: "john.k@gmail.com", 
      phone: "+254 712 345 678",
      contributed: 75000, 
      target: 120000,
      progress: 62.5,
      status: "Active"
    },
    { 
      id: 2,
      name: "Mary Wanjiku", 
      email: "mary@yahoo.com", 
      phone: "+254 723 456 789",
      contributed: 45000, 
      target: 60000,
      progress: 75,
      status: "Active"
    },
    { 
      id: 3,
      name: "Peter Odhiambo", 
      email: "peter.o@gmail.com", 
      phone: "+254 734 567 890",
      contributed: 30000, 
      target: 100000,
      progress: 30,
      status: "Active"
    },
    { 
      id: 4,
      name: "Elizabeth Njeri", 
      email: "liz@outlook.com", 
      phone: "+254 745 678 901",
      contributed: 90000, 
      target: 90000,
      progress: 100,
      status: "Active"
    }
  ];

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.includes(searchTerm)
  );

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
          Church Members
        </h2>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1.5rem",
          padding: "1.5rem",
          flex: 1,
        }}
      >
        <div 
          style={{
            display: "flex",
            marginBottom: "1rem"
          }}
        >
          <div 
            style={{
              flex: 1,
              position: "relative",
              marginRight: "0.5rem"
            }}
          >
            <Search 
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#7386D5",
                width: "1.25rem",
                height: "1.25rem"
              }}
            />
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #E0E0E0",
                fontSize: "0.875rem",
                outline: "none",
                backgroundColor: "#F9F9F9",
              }}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              backgroundColor: showFilters ? "#7386D5" : "#F9F9F9",
              padding: "0.75rem",
              borderRadius: "0.75rem",
              border: "1px solid #E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Filter 
              style={{ 
                color: showFilters ? "white" : "#7386D5" 
              }} 
            />
          </button>
        </div>

        {showFilters && (
          <div
            style={{
              backgroundColor: "#F0F4FF",
              padding: "1rem",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem"
            }}
          >
            {["Active", "Inactive", "Completed Target", "Below 50%"].map((filter, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#7386D5",
                  color: "white",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "1rem",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {filter}
                <X style={{ marginLeft: "0.25rem", width: "0.75rem", height: "0.75rem" }} />
              </div>
            ))}
          </div>
        )}
        
        <div style={{ marginBottom: "1rem", color: "#666666" }}>
          <p>{filteredMembers.length} members found</p>
        </div>

        {filteredMembers.map((member) => (
          <div 
            key={member.id}
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "0.75rem",
              padding: "1rem",
              marginBottom: "1rem",
              border: "1px solid #E0E0E0"
            }}
          >
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              marginBottom: "0.75rem" 
            }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ 
                  backgroundColor: "#E0E6FF", 
                  borderRadius: "50%", 
                  width: "2.5rem", 
                  height: "2.5rem", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  marginRight: "0.75rem"
                }}>
                  <User style={{ color: "#7386D5" }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>{member.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", fontSize: "0.75rem", color: "#666666" }}>
                    <Mail style={{ width: "0.75rem", height: "0.75rem", marginRight: "0.25rem" }} />
                    <span style={{ marginRight: "0.75rem" }}>{member.email}</span>
                    <Phone style={{ width: "0.75rem", height: "0.75rem", marginRight: "0.25rem" }} />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
              <MoreVertical style={{ color: "#7386D5", cursor: "pointer" }} />
            </div>
            
            <div style={{ marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#666666" }}>Contribution Progress</p>
                <p style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#7386D5" }}>
                  {member.progress}%
                </p>
              </div>
              <div style={{ 
                height: "0.5rem", 
                backgroundColor: "#E0E0E0", 
                borderRadius: "0.25rem",
                overflow: "hidden"
              }}>
                <div style={{ 
                  height: "100%", 
                  width: `${member.progress}%`, 
                  backgroundColor: member.progress >= 100 ? "#4CAF50" : "#7386D5" 
                }}></div>
              </div>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                marginTop: "0.25rem",
                fontSize: "0.75rem",
                color: "#666666"
              }}>
                <span>KES {member.contributed.toLocaleString()}</span>
                <span>Target: KES {member.target.toLocaleString()}</span>
              </div>
            </div>
            
            <div style={{ 
              display: "flex", 
              borderTop: "1px solid #E0E0E0", 
              paddingTop: "0.75rem",
              justifyContent: "space-around"
            }}>
              <button style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#7386D5",
                background: "none",
                border: "none",
                fontSize: "0.75rem",
                cursor: "pointer"
              }}>
                <User style={{ width: "1rem", height: "1rem", marginRight: "0.25rem" }} />
                Profile
              </button>
              <button style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#7386D5",
                background: "none",
                border: "none",
                fontSize: "0.75rem",
                cursor: "pointer"
              }}>
                <MessageSquare style={{ width: "1rem", height: "1rem", marginRight: "0.25rem" }} />
                Message
              </button>
              <button style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#DA1212",
                background: "none",
                border: "none",
                fontSize: "0.75rem",
                cursor: "pointer"
              }}>
                <Trash2 style={{ width: "1rem", height: "1rem", marginRight: "0.25rem" }} />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMembersPage;
import React from "react";
import { PieChart, LineChart, BarChart } from "lucide-react";

const Analytics = () => {
  // Sample data for charts and statistics
  const fundingSources = [
    { source: "Members", amount: 14808, percentage: 60 },
    { source: "External Donors", amount: 7404, percentage: 30 },
    { source: "Events", amount: 2468, percentage: 10 },
  ];

  const monthlyData = [
    { month: "Jul", amount: 3200, contributors: 112, avgDonation: 142 },
    { month: "Aug", amount: 3800, contributors: 127, avgDonation: 149 },
    { month: "Sep", amount: 4600, contributors: 135, avgDonation: 151 },
    { month: "Oct", amount: 5100, contributors: 142, avgDonation: 155 },
    { month: "Nov", amount: 4500, contributors: 138, avgDonation: 153 },
    { month: "Dec", amount: 3480, contributors: 157, avgDonation: 157 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #4169E1, #DA1212)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Analytics
        </h1>
      </div>

      {/* Main Content Container */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          maxWidth: "800px",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        {/* Summary Stats Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <StatCard
            title="Total Raised"
            value="$24,680"
            change="+14% vs last month"
            isPositive={true}
          />
          <StatCard
            title="Contributors"
            value="157"
            change="+23 this month"
            isPositive={true}
          />
          <StatCard
            title="Avg. Donation"
            value="$157"
            change="+$12 vs last month"
            isPositive={true}
          />
        </div>

        {/* Source of Funds Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <PieChart
              style={{ width: "1.25rem", height: "1.25rem", color: "#4169E1" }}
            />
            <h2
              style={{
                margin: 0,
                marginLeft: "0.5rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              Source of Funds
            </h2>
          </div>

          <div
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#4169E1",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  <th style={tableHeaderStyle}>Source</th>
                  <th style={tableHeaderStyle}>Amount</th>
                  <th style={tableHeaderStyle}>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {fundingSources.map((source, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#F2F2F2" : "#FFFFFF",
                    }}
                  >
                    <td style={tableCellStyle}>{source.source}</td>
                    <td style={tableCellStyle}>${source.amount.toLocaleString()}</td>
                    <td style={tableCellStyle}>{source.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Contributions Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <BarChart
              style={{ width: "1.25rem", height: "1.25rem", color: "#4169E1" }}
            />
            <h2
              style={{
                margin: 0,
                marginLeft: "0.5rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              Monthly Contributions
            </h2>
          </div>

          <div
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#4169E1",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  <th style={tableHeaderStyle}>Month</th>
                  <th style={tableHeaderStyle}>Amount</th>
                  <th style={tableHeaderStyle}>Contributors</th>
                  <th style={tableHeaderStyle}>Avg. Donation</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#F2F2F2" : "#FFFFFF",
                      ...(index === monthlyData.length - 1
                        ? { fontWeight: "bold", border: "1px solid #DA1212" }
                        : {}),
                    }}
                  >
                    <td style={tableCellStyle}>{item.month}</td>
                    <td style={tableCellStyle}>${item.amount.toLocaleString()}</td>
                    <td style={tableCellStyle}>{item.contributors}</td>
                    <td style={tableCellStyle}>${item.avgDonation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Section */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <LineChart
              style={{ width: "1.25rem", height: "1.25rem", color: "#4169E1" }}
            />
            <h2
              style={{
                margin: 0,
                marginLeft: "0.5rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              Period Comparison
            </h2>
          </div>

          <div
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#4169E1",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  <th style={tableHeaderStyle}>Metric</th>
                  <th style={tableHeaderStyle}>Current Period</th>
                  <th style={tableHeaderStyle}>Previous Period</th>
                  <th style={tableHeaderStyle}>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "#F2F2F2" }}>
                  <td style={tableCellStyle}>Total Donations</td>
                  <td style={tableCellStyle}>$24,680</td>
                  <td style={tableCellStyle}>$21,200</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>+$3,480 (16.4%)</td>
                </tr>
                <tr style={{ backgroundColor: "#FFFFFF" }}>
                  <td style={tableCellStyle}>Average Donation</td>
                  <td style={tableCellStyle}>$157</td>
                  <td style={tableCellStyle}>$145</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>+$12 (8.3%)</td>
                </tr>
                <tr style={{ backgroundColor: "#F2F2F2" }}>
                  <td style={tableCellStyle}>New Contributors</td>
                  <td style={tableCellStyle}>23</td>
                  <td style={tableCellStyle}>18</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>+5 (27.8%)</td>
                </tr>
                <tr style={{ backgroundColor: "#FFFFFF" }}>
                  <td style={tableCellStyle}>Retention Rate</td>
                  <td style={tableCellStyle}>94%</td>
                  <td style={tableCellStyle}>92%</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>+2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, isPositive }) => {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        borderRadius: "1rem",
        padding: "1rem",
        width: "calc(33.33% - 1rem)",
        minWidth: "200px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3
        style={{
          fontSize: "1rem",
          color: "#666666",
          margin: "0 0 0.5rem 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#DA1212",
          margin: "0 0 0.5rem 0",
        }}
      >
        {value}
      </p>
      <span
        style={{
          fontSize: "0.75rem",
          color: isPositive ? "#4CAF50" : "#F44336",
        }}
      >
        {change}
      </span>
    </div>
  );
};

// Table Styles
const tableHeaderStyle = {
  padding: "0.75rem",
  borderRadius: "0.25rem 0.25rem 0 0",
};

const tableCellStyle = {
  padding: "0.75rem",
};

export default Analytics;
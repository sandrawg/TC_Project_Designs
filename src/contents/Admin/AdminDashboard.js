import React from "react";
import { Menu, Bell, ArrowUpRight, ArrowDownRight } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Header */}
      <div className="bg-red-600 p-6 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Menu className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold ml-3">Admin Dashboard</h1>
        </div>
        <Bell className="w-6 h-6 text-white" />
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
        {["Total Raised", "Active Church Members"].map((stat, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white rounded-xl p-6 shadow-md"
          >
            <p className="text-sm opacity-80">{stat}</p>
            <h2 className="text-2xl font-bold mt-1">
              {stat === "Total Raised" ? "KES 100M" : "328"}
            </h2>
            <div className="flex items-center mt-2 text-green-400">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              <p className="text-sm">
                {stat === "Total Raised" ? "+12.5% this week" : "+24 this week"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <h2 className="font-bold mb-4">Contribution Progress</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-1 text-gray-600 text-sm">
            <p>Progress to Goal</p>
            <p className="font-bold">75%</p>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded">
            <div className="h-full bg-red-600 rounded" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center text-gray-600">
          {["KES 500M", "365 Days", "KES 200M"].map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold">{item}</h3>
              <p className="text-xs">
                {index === 0 ? "Target" : index === 1 ? "Days Left" : "Avg Contribution"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Section */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {["New Contributors", "Total Contribution", "Avg. Contribution"].map(
            (activity, index) => (
              <div key={index} className="flex justify-between text-gray-600 text-sm">
                <p>{activity}</p>
                <div className="flex items-center">
                  {index === 2 ? (
                    <ArrowDownRight className="w-4 h-4 text-red-600 mr-2" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-green-400 mr-2" />
                  )}
                  <p
                    className={`font-bold ${index === 2 ? "text-red-600" : "text-green-400"}`}
                  >
                    {index === 0 ? "+12" : index === 1 ? "+KES 5.2k" : "-KES 124"}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

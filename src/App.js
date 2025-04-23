import React from "react";
import { useState } from "react";
import "./App.css";

// Import all the screens
import LoginRegistrationAdmin from "./contents/Admin/LoginRegistration";
import NotificationsAdmin from "./contents/User/Notifications";
import SetTargetAdmin from "./contents/Admin/SetTarget";
import UserManagementAdmin from "./contents/Admin/UserManagement";
import SplashscreenAdmin from "./contents/Admin/Splashscreen";
import LandingPage from "./contents/Admin/LandingPage";
import SettingsPage from "./contents/Admin/Settings";
import AdminDashboardWithSidebar from "./contents/Admin/sidebar";
import AdminMembersPage from "./contents/Admin/AdminMembersPage";
import Analytics from "./contents/Admin/Analytics";
import ReportsPage from "./contents/Admin/ReportsPage";
import AdminAccess from "./contents/Admin/AdminAccess";

import UserDashboard from "./contents/User/UserDashboard";
import LoginRegisterUser from "./contents/User/LoginRegister";
import NotificationsUser from "./contents/User/Notifications";
import PaymentUser from "./contents/User/Payment";
import ProgressUser from "./contents/User/Progress";
import SetTargetUser from "./contents/User/SetTarget";
import ShareUser from "./contents/User/Share";
import SplashscreenUser from "./contents/User/Splashscreen";
import DonationHistory from "./contents/User/DonationHistory";
import EventsPage from "./contents/User/EventsPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // List of all screens (User and Admin sides)
  const screens = [
    <SplashscreenAdmin />,
    <LandingPage />,
    <LoginRegistrationAdmin />,
    <AdminDashboardWithSidebar />,
    <AdminMembersPage />,
    <SetTargetAdmin />,
    <Analytics />,
    <ReportsPage />,
    <UserManagementAdmin />,
    <AdminAccess />,
    <NotificationsAdmin />,
    <SettingsPage />,
    
    <SplashscreenUser />,
    <LandingPage />,
    <LoginRegisterUser />,
    <UserDashboard />,
    <SetTargetUser />,
    <PaymentUser />,
    <DonationHistory />,
    <ShareUser />,
    <ProgressUser />,
    <EventsPage />,
    <NotificationsUser />,
    <SettingsPage />,

  ];

  // Navigation logic
  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % screens.length);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + screens.length) % screens.length);
  };

  return (
    <div className="App">
      <div className="screen-container">{screens[currentPage]}</div>
      <div className="navigation">
        <button onClick={prevPage} className="nav-button">←</button>
        <button onClick={nextPage} className="nav-button">→</button>
      </div>
    </div>
  );
}


if (module.hot) {
  module.hot.accept();
}

export default App;


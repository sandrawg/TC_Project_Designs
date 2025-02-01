import React from 'react';
import { Bell, CreditCard, Share2 } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #7386D5, #11468F)',
        color: '#FFFFFF',
        padding: '1.5rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome, Sandra</h1>
          <p style={{ color: '#DA1212', fontSize: '1rem' }}>Your Contributions Matter</p>
        </div>
        <Bell style={{ color: '#FFFFFF', width: '2rem', height: '2rem' }} />
      </div>

      {/* Progress Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          color: '#7386D5',
          padding: '1rem',
          borderRadius: '0.75rem',
          marginBottom: '1rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>My Progress</h2>
        <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>$2,500 Raised</span>
          <span>Target: $5,000</span>
        </div>
        <div style={{ backgroundColor: '#EEEEEE', height: '0.5rem', borderRadius: '0.5rem' }}>
          <div style={{ backgroundColor: '#DA1212', height: '100%', width: '50%' }}></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          style={{
            flex: 1,
            backgroundColor: '#DA1212',
            color: '#FFFFFF',
            padding: '1rem',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <CreditCard style={{ marginRight: '0.5rem' }} />
          Contribute
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: '#7386D5',
            color: '#FFFFFF',
            padding: '1rem',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Share2 style={{ marginRight: '0.5rem' }} />
          Share
        </button>
      </div>

      {/* Recent Activity */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          color: '#7386D5',
          padding: '1rem',
          borderRadius: '0.75rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Recent Activity</h2>
        {[{ date: 'Jan 20', amount: '$500' }].map((activity, index) => (
          <div key={index} style={{ margin: '1rem 0', display: 'flex', justifyContent: 'space-between' }}>
            <span>{activity.date}</span>
            <span>{activity.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;

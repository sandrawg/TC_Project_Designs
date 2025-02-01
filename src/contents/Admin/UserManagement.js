import React, { useState } from 'react';
import { ChevronLeft, Search, Users, Filter, MoreVertical, UserX, UserCheck, Mail } from 'lucide-react';

const UserManagement = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <ChevronLeft style={{ color: '#FFFFFF', width: '1.5rem', height: '1.5rem' }} />
        <h1 style={{ marginLeft: '1rem', fontWeight: 'bold', fontSize: '1.25rem' }}>User Management</h1>
      </div>

      {/* Search and Filters */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          padding: '1rem',
          borderRadius: '0.75rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Search style={{ color: '#7386D5', width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
        <input
          type="search"
          placeholder="Search users..."
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            color: '#7386D5',
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '1rem' }}>
        {['All Users', 'Active', 'Inactive', 'Top Contributors'].map((filter) => (
          <button
            key={filter}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.75rem',
              backgroundColor: selectedFilter === filter.toLowerCase() ? '#DA1212' : '#11468F',
              color: '#FFFFFF',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedFilter(filter.toLowerCase())}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* User List */}
      <div>
        {[1, 2, 3, 4, 5].map((user, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#7386D5',
              padding: '1rem',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Users style={{ color: '#11468F', width: '2rem', height: '2rem', marginRight: '0.5rem' }} />
              <div>
                <p style={{ fontWeight: 'bold', margin: 0 }}>John Doe</p>
                <p style={{ margin: 0, color: '#666666', fontSize: '0.875rem' }}>john.doe@example.com</p>
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#DA1212' }}>$5,000</p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#11468F' }}>4 Contributions</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;

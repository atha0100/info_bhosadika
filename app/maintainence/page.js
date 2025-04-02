'use client'
import React, { useState } from 'react';
import '../styles.css'; // Correct CSS import path

export default function Maintenance() {
  const [filter, setFilter] = useState('all');
  const [maintenanceRequests, setMaintenanceRequests] = useState([
    { id: 1, title: 'Leaking Roof', status: 'in-progress' },
    { id: 2, title: 'Lift Repair', status: 'pending' },
    { id: 3, title: 'Paint Exterior Walls', status: 'completed' }
  ]);

  const handleStatusChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredRequests = maintenanceRequests.filter((request) => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const handleRequestAction = (id) => {
    // Example: If you want to update the status of a maintenance item
    setMaintenanceRequests(prevState => prevState.map(request => {
      if (request.id === id && request.status !== 'completed') {
        return { ...request, status: 'completed' };
      }
      return request;
    }));
  };

  return (
    <main>
      <header>
        <h1>Maintenance Requests</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/finance">Finance</a></li>
            <li><a href="/committee">Committee</a></li>
            <li><a href="/documents">Documents</a></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <h2>Ongoing Maintenance</h2>
        <div>
          <label htmlFor="status-filter">Filter by status:</label>
          <select id="status-filter" onChange={handleStatusChange} value={filter}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <ul id="maintenance-list">
          {filteredRequests.map((request) => (
            <li key={request.id} className={`maintenance-item ${request.status}`}>
              <h3>{request.title}</h3>
              <p>Status: <span className="status">{request.status.replace('-', ' ').toUpperCase()}</span></p>
              {request.status !== 'completed' && (
                <button onClick={() => handleRequestAction(request.id)}>
                  {request.status === 'pending' ? 'Start Repair' : 'Mark as Completed'}
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 Strata Management | <a href="/contact" style={{ color: 'white' }}>Contact Us</a> | <a href="/about" style={{ color: 'white' }}>About</a></p>
      </footer>
    </main>
  );
}

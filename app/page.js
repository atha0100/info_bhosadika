'use client'
import React from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation
import './styles.css'; // Correct CSS import path

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <header>
        <h1>Strata Management</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/finance">Finance</Link></li>
            <li><Link href="/committee">Committee</Link></li>
            <li><Link href="/maintenance">Maintenance</Link></li>
            <li><Link href="/documents">Documents</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <h2>Welcome to the Strata Management Dashboard</h2>
        <p>Manage your building's finances, committee members, maintenance requests, and documents efficiently.</p>
        
        {/* Dashboard Cards Section */}
        <div className="dashboard-cards">
          {/* Active Requests Box */}
          <div className="dashboard-card active-requests">
            <h3>Active Requests</h3>
            <p className="number">5</p>
          </div>

          {/* Upcoming Meetings Box */}
          <div className="dashboard-card upcoming-meetings">
            <h3>Upcoming Meetings</h3>
            <p className="number">2</p>
            <div className="icon">
              <i className="fas fa-calendar-alt"></i> {/* FontAwesome Calendar Icon */}
            </div>
          </div>

          {/* Finances Box */}
          <div className="dashboard-card finances">
            <h3>Finances</h3>
            <p className="number">$150,000</p>
            <button onClick={() => window.location.href = '/finance'}>View Finance</button>
          </div>
        </div>

        {/* Upcoming Meetings List Section */}
        <div className="meetings-list">
          <h3>Upcoming Meetings</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-04-10</td>
                <td>Annual General Meeting</td>
                <td>Community Hall</td>
              </tr>
              <tr>
                <td>2025-04-15</td>
                <td>Maintenance Review</td>
                <td>Building Lobby</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2025 Strata Management | <Link href="/contact"><a style={{ color: 'white' }}>Contact Us</a></Link> | <Link href="/about"><a style={{ color: 'white' }}>About</a></Link></p>
      </footer>
    </main>
  );
}

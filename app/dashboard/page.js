import React from 'react';
import '../styles.css'; // Correct CSS import path

export default function Dashboard() {
  return (
    <main>
      <header>
        <h1>Strata Management</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/committee">Committee</a></li>
            <li><a href="/finances">Finances</a></li>
            <li><a href="/maintenance">Maintenance</a></li>
            <li><a href="/documents">Documents</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>Dashboard</h2>
        <p>Overview of building management activities.</p>

        <div className="stats">
          <div className="stat-card">
            <h3>Total Residents</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>Active Issues</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Upcoming Meetings</h3>
            <p>2</p>
          </div>
        </div>

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
      </section>

      <footer>
        <p>&copy; 2025 Strata Management</p>
      </footer>
    </main>
  );
}

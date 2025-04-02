import React from 'react';
import '../styles.css'; // Correct CSS import path

export default function Finance() {
  return (
    <main>
      <header>
        <h1>Finance Overview</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/committee">Committee</a></li>
            <li><a href="/maintenance">Maintenance</a></li>
            <li><a href="/documents">Documents</a></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <h2>Building Finances</h2>
        <div className="finance-stats">
          <div className="stat">
            <h3>Total Income</h3>
            <p>$150,000</p>
          </div>
          <div className="stat">
            <h3>Total Expenditure</h3>
            <p>$120,000</p>
          </div>
          <div className="stat">
            <h3>Surplus</h3>
            <p>$30,000</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Strata Management | <a href="/contact" style={{ color: 'white' }}>Contact Us</a> | <a href="/about" style={{ color: 'white' }}>About</a></p>
      </footer>
    </main>
  );
}

'use client'
import React from 'react';
import Link from 'next/link'; // For navigation
import '../styles.css'; // Correct CSS import path

export default function Finance() {
  return (
    <main>
      <header>
        <h1>Finance Overview</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/committee">Committee</Link></li>
            <li><Link href="/maintenance">Maintenance</Link></li>
            <li><Link href="/documents">Documents</Link></li>
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
        <p>&copy; 2025 Strata Management | <Link href="/contact" style={{ color: 'white' }}>Contact Us</Link> | <Link href="/about" style={{ color: 'white' }}>About</Link></p>
      </footer>
    </main>
  );
}

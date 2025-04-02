'use client'
import React from 'react';
import Link from 'next/link';
import '../styles.css';

export default function Finance() {
  return (
    <main>
      <header className="header">
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

      <section className="finance-section">
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

        <div className="transaction-history">
          <h2>Recent Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-03-01</td>
                <td>Monthly Maintenance Fees</td>
                <td>$10,000</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>2025-03-05</td>
                <td>Repairs & Maintenance</td>
                <td>-$2,500</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2025-03-10</td>
                <td>Security Services</td>
                <td>-$4,000</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Strata Management | <Link href="/contact">Contact Us</Link> | <Link href="/about">About</Link></p>
      </footer>
    </main>
  );
}
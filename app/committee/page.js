import React from 'react';
import Link from 'next/link'; // For navigation
import '../styles.css'; // Correct CSS import path

export default function Committee() {
  return (
    <main>
      <header>
        <h1>Committee Members</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/finance">Finance</Link></li>
            <li><Link href="/maintenance">Maintenance</Link></li>
            <li><Link href="/documents">Documents</Link></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <h2>Meet the Committee</h2>
        <div className="committee-members">
          <div className="member">
            <h3>John Doe</h3>
            <p>Chairperson</p>
            <p>
              <a href="tel:+1234567890">Call</a> | <a href="mailto:johndoe@example.com">Email</a>
            </p>
          </div>
          <div className="member">
            <h3>Jane Smith</h3>
            <p>Secretary</p>
            <p>
              <a href="tel:+1234567890">Call</a> | <a href="mailto:janesmith@example.com">Email</a>
            </p>
          </div>
          {/* Add more committee members here */}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Strata Management | <Link href="/contact" style={{ color: 'white' }}>Contact Us</Link> | <Link href="/about" style={{ color: 'white' }}>About</Link></p>
      </footer>
    </main>
  );
}

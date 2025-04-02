'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles.css';

export default function Documents() {
  const [previewSrc, setPreviewSrc] = useState('');

  return (
    <main>
      <header>
        <h1>Documents</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/finance">Finance</Link></li>
            <li><Link href="/committee">Committee</Link></li>
            <li><Link href="/maintenance">Maintenance</Link></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <h2>Available Documents</h2>
        <div>
          <input type="text" placeholder="Search documents..." />
        </div>

        <ul className="documents-list">
          <li className="document-link" onClick={() => setPreviewSrc('/documents/minutes_jan_2025.pdf')}>
            Minutes of Meeting - Jan 2025
          </li>
          <li className="document-link" onClick={() => setPreviewSrc('/documents/strata_budget_2024.pdf')}>
            Strata Budget Report 2024
          </li>
          <li className="document-link" onClick={() => setPreviewSrc('/documents/insurance_policy.jpg')}>
            Insurance Policy
          </li>
          <li className="document-link" onClick={() => setPreviewSrc('/documents/building_maintenance_plan.pdf')}>
            Building Maintenance Plan
          </li>
        </ul>

        {previewSrc && (
          <div id="document-preview">
            <iframe src={previewSrc} width="100%" height="600px"></iframe>
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2025 Strata Management | <Link href="/contact" style={{ color: 'white' }}>Contact Us</Link> | <Link href="/about" style={{ color: 'white' }}>About</Link></p>
      </footer>
    </main>
  );
}

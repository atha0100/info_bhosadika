import React from 'react';
import Link from 'next/link'; // For navigation
import '../styles.css'; // Correct CSS import path

export default function Documents() {
  // You can add JavaScript logic here (like functions for searching and previewing documents)
  
  const previewDocument = (documentPath) => {
    // Example logic for displaying a PDF using iframe
    const previewContainer = document.getElementById('document-preview');
    previewContainer.innerHTML = `
      <iframe src="${documentPath}" width="100%" height="600px"></iframe>
    `;
  };

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
          <input 
            type="text" 
            id="search-documents" 
            placeholder="Search documents..." 
            // onInput function can be defined here
          />
        </div>

        <ul className="documents-list">
          <li className="document-link" onClick={() => previewDocument('documents/minutes_jan_2025.pdf')}>Minutes of Meeting - Jan 2025</li>
          <li className="document-link" onClick={() => previewDocument('documents/strata_budget_2024.pdf')}>Strata Budget Report 2024</li>
          <li className="document-link" onClick={() => previewDocument('documents/insurance_policy.jpg')}>Insurance Policy</li>
          <li className="document-link" onClick={() => previewDocument('documents/building_maintenance_plan.pdf')}>Building Maintenance Plan</li>
        </ul>

        <div id="document-preview"></div>
      </section>

      <footer>
        <p>&copy; 2025 Strata Management | <Link href="/contact" style={{ color: 'white' }}>Contact Us</Link> | <Link href="/about" style={{ color: 'white' }}>About</Link></p>
      </footer>
    </main>
  );
}

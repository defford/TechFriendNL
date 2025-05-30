import React from 'react';
import './Footer.css'; // We'll create this file for styling

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Tech Friend NL. All rights reserved.</p>
      {/* Optional: Add social media links or other info here */}
    </footer>
  );
}

export default Footer;

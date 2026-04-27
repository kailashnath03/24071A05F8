import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px 0',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'var(--text-muted)',
      marginTop: 'auto',
      width: '100%'
    }}>
      <div className="container">
        <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 500 }}>
          &copy; 24071A05F8 Hotel Booking System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

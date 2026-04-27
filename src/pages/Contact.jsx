import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
        <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '900px', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
          
          <div style={{ flex: '1 1 300px', padding: '40px', background: 'rgba(59, 130, 246, 0.1)', borderRight: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>Get in Touch</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'var(--primary-color)', padding: '12px', borderRadius: '50%' }}>
                  <Phone size={20} color="#fff" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ color: 'var(--text-muted)' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'var(--primary-color)', padding: '12px', borderRadius: '50%' }}>
                  <Mail size={20} color="#fff" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)' }}>info@luxestay.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'var(--primary-color)', padding: '12px', borderRadius: '50%' }}>
                  <MapPin size={20} color="#fff" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Location</h4>
                  <p style={{ color: 'var(--text-muted)' }}>123 Paradise Blvd, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '2 1 400px', padding: '40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '16px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for contacting us. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="glass-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="glass-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="glass-input" rows="5" required style={{ resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>Send Message</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

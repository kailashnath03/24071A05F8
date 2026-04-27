import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { CreditCard, CheckCircle } from 'lucide-react';

const Payment = () => {
  const { currentBooking, addBooking } = useBooking();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  if (!currentBooking) {
    return (
      <div className="page-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem' }}>No Active Booking</h2>
        <button onClick={() => navigate('/rooms')} className="btn-primary" style={{ marginTop: '16px' }}>Return to Rooms</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(currentBooking);
    setSuccess(true);
    setTimeout(() => {
      navigate('/history');
    }, 3000);
  };

  if (success) {
    return (
      <div className="page-wrapper" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: '48px', maxWidth: '500px' }}>
          <CheckCircle size={64} color="var(--accent-color)" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--accent-color)' }}>Payment Successful!</h2>
          <p style={{ color: 'var(--text-muted)' }}>Your booking for the {currentBooking.room.name} has been confirmed.</p>
          <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Redirecting to your booking history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <CreditCard size={32} color="var(--primary-color)" />
          <h2 style={{ fontSize: '2rem' }}>Secure Payment</h2>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Total Amount</span>
            <span style={{ fontWeight: '700', fontSize: '1.25rem', color: 'var(--primary-color)' }}>${currentBooking.total}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Cardholder Name</label>
            <input type="text" className="glass-input" required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label className="form-label">Card Number</label>
            <input type="text" className="glass-input" required placeholder="0000 0000 0000 0000" maxLength="19" />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Expiry (MM/YY)</label>
              <input type="text" className="glass-input" required placeholder="12/25" maxLength="5" />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">CVV</label>
              <input type="text" className="glass-input" required placeholder="123" maxLength="4" />
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px', padding: '16px' }}>
            Pay ${currentBooking.total} Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

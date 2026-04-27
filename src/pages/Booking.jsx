import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const Booking = () => {
  const { currentBooking, setCurrentBooking } = useBooking();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
  });

  if (!currentBooking?.room) {
    return (
      <div className="page-wrapper" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>No Room Selected</h2>
        <button onClick={() => navigate('/rooms')} className="btn-primary">Browse Rooms</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      return days > 0 ? days * currentBooking.room.price : 0;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    if (total <= 0) {
      alert("Invalid dates selected.");
      return;
    }
    setCurrentBooking({ ...currentBooking, ...formData, total });
    navigate('/payment');
  };

  return (
    <div className="page-wrapper">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
        <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '800px', display: 'flex', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1 1 300px', padding: '32px', borderRight: '1px solid var(--glass-border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Booking Summary</h3>
            <img src={currentBooking.room.image} alt="Room" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
            <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{currentBooking.room.name}</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>${currentBooking.room.price} / night</p>
            
            {calculateTotal() > 0 && (
              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--glass-border)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '700' }}>
                  <span>Total Amount</span>
                  <span style={{ color: 'var(--primary-color)' }}>${calculateTotal()}</span>
                </div>
              </div>
            )}
          </div>

          <div style={{ flex: '2 1 400px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Guest Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="glass-input" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Check-in Date</label>
                  <input type="date" name="checkIn" className="glass-input" value={formData.checkIn} onChange={handleInputChange} required />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Check-out Date</label>
                  <input type="date" name="checkOut" className="glass-input" value={formData.checkOut} onChange={handleInputChange} required />
                </div>
              </div>
              <div style={{ marginTop: '32px' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Proceed to Payment</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { Check } from 'lucide-react';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  const { setCurrentBooking } = useBooking();

  const handleBookNow = () => {
    setCurrentBooking({ room });
    navigate('/booking');
  };

  return (
    <div className="glass-panel room-card animate-fade-in" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '240px', overflow: 'hidden' }}>
        <img 
          src={room.image} 
          alt={room.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{room.name}</h3>
          <span style={{ color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: '700' }}>${room.price}<span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '400' }}>/night</span></span>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>{room.description}</p>
        
        <ul style={{ listStyle: 'none', marginBottom: '24px', flex: 1 }}>
          {room.features.map((feature, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Check size={16} color="var(--accent-color)" /> {feature}
            </li>
          ))}
        </ul>

        <button onClick={handleBookNow} className="btn-primary" style={{ width: '100%' }}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;

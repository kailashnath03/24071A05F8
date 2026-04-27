import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Calendar, DollarSign, User as UserIcon } from 'lucide-react';
import { ROOMS } from '../data/rooms';

const History = () => {
  const { bookings } = useBooking();

  return (
    <div className="page-wrapper">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '32px', textAlign: 'center' }}>My Booking History</h2>
        
        {bookings.length === 0 ? (
          <div className="glass-panel animate-fade-in" style={{ padding: '48px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>You have no bookings yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
            {bookings.slice().reverse().map((booking) => {
              const currentRoomData = ROOMS.find(r => r.id === booking.room?.id || r.name === booking.room?.name);
              const roomImage = currentRoomData?.image || booking.room?.image;
              const roomName = currentRoomData?.name || booking.room?.name || 'Unknown Room';

              return (
              <div key={booking.id} className="glass-panel animate-fade-in" style={{ display: 'flex', padding: '24px', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 200px' }}>
                  {roomImage && (
                    <img src={roomImage} alt="Room" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                  )}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--primary-color)' }}>{roomName}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                      <UserIcon size={18} />
                      <span>Guest: {booking.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                      <Calendar size={18} />
                      <span>{booking.checkIn} to {booking.checkOut}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 'bold' }}>
                      <DollarSign size={18} color="var(--accent-color)" />
                      <span>Total: ${booking.total}</span>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Booking ID: {booking.id}
                  </div>
                </div>
              </div>
            )})}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;

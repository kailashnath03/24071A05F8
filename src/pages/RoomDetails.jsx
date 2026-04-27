import React from 'react';
import RoomCard from '../components/RoomCard';
import { ROOMS } from '../data/rooms';

const RoomDetails = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px' }}>Our Accommodations</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Select from our carefully curated range of rooms, designed to provide the utmost comfort and luxury.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {ROOMS.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

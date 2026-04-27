import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="page-wrapper" style={{ justifyContent: 'center' }}>
      <div className="container">
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '24px', lineHeight: '1.2', background: 'linear-gradient(to right, #fff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Experience Luxury Like Never Before
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
            Welcome back, {user?.username}. Discover our world-class rooms and exceptional service designed to make your stay unforgettable.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/rooms" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Explore Rooms <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

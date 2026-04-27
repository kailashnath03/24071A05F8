import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Hotel, User, LogOut, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', zIndex: 1000, display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Link to={user ? "/home" : "/"} style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Hotel color="var(--primary-color)" />
          LuxeStay
        </Link>
        
        {user ? (
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link to="/home" style={{ color: location.pathname === '/home' ? 'var(--primary-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>Home</Link>
            <Link to="/rooms" style={{ color: location.pathname === '/rooms' ? 'var(--primary-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>Rooms</Link>
            <Link to="/booking" style={{ color: location.pathname === '/booking' ? 'var(--primary-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>Booking</Link>
            <Link to="/history" style={{ color: location.pathname === '/history' ? 'var(--primary-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>History</Link>
            <Link to="/contact" style={{ color: location.pathname === '/contact' ? 'var(--primary-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>Contact</Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '24px', paddingLeft: '24px', borderLeft: '1px solid var(--glass-border)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)' }}>
                <User size={18} /> {user.username}
              </span>
              <button onClick={handleLogout} className="btn-primary" style={{ padding: '8px 16px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link to="/" style={{ color: location.pathname === '/' ? 'var(--primary-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LogIn size={18} /> Login
            </Link>
            <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <UserPlus size={18} /> Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

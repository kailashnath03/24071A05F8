import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('hotel_active_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [usersDb, setUsersDb] = useState(() => {
    const savedUsers = localStorage.getItem('hotel_users_db');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem('hotel_users_db', JSON.stringify(usersDb));
  }, [usersDb]);

  const register = (username, password) => {
    const existingUser = usersDb.find(u => u.username === username);
    if (existingUser) {
      return { success: false, message: 'Username already exists' };
    }
    const newUser = { username, password };
    setUsersDb([...usersDb, newUser]);
    return { success: true };
  };

  const login = (username, password) => {
    const foundUser = usersDb.find(u => u.username === username && u.password === password);
    if (foundUser) {
      const userData = { username };
      setUser(userData);
      localStorage.setItem('hotel_active_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: 'Invalid username or password' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hotel_active_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

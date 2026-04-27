import React, { createContext, useState, useContext, useEffect } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('hotel_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentBooking, setCurrentBooking] = useState(null);

  useEffect(() => {
    localStorage.setItem('hotel_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (bookingData) => {
    const newBooking = { ...bookingData, id: Date.now() };
    setBookings(prev => [...prev, newBooking]);
    setCurrentBooking(null); // Clear current after successful payment
    return newBooking;
  };

  return (
    <BookingContext.Provider value={{ bookings, currentBooking, setCurrentBooking, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

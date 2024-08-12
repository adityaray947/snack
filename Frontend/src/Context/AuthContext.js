import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userToken', userData.token);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  };

  const logout = () => {
    setUser(null);
    setLocation({ latitude: null, longitude: null });
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ user, location, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

'use client';
import React, { createContext, useState, useContext } from 'react';

const AuthenticationContext = createContext();

export const SessionAuthenticationProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(() => {
    const storedValue = sessionStorage.getItem('authenticated');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const value = {
    authentication,
    setAuthentication,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAppContext = () => useContext(AuthenticationContext);

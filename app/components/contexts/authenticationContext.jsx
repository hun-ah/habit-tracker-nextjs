'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthenticationContext = createContext();

export const SessionAuthenticationProvider = ({ children }) => {
  const isBrowser = typeof window !== 'undefined';

  const [authentication, setAuthentication] = useState(() => {
    if (isBrowser) {
      const storedValue = sessionStorage.getItem('authenticated');
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return false;
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

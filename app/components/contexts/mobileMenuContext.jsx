'use client';
import React, { createContext, useState, useContext } from 'react';

const MobileMenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  const value = {
    openNav,
    setOpenNav,
  };
  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useAppContext = () => useContext(MobileMenuContext);

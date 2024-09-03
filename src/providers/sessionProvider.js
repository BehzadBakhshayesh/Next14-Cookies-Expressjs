"use client";

import React, { createContext, useContext } from "react";

export const SessionContext = createContext(null);

const SessionProvider = ({ session, children }) => {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;

export const useSession = () => {
  const session = useContext(SessionContext);
  if (session === undefined) {
    throw new Error("useSession ...");
  }
  return session;
};

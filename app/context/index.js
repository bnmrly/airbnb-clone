"use client";

import React, { useState } from "react";

const StaysContext = React.createContext();

const StaysProvider = (props) => {
  const myName = "Ben Marley";

  return (
    <StaysContext.Provider value={{ myName }}>
      {props.children}
    </StaysContext.Provider>
  );
};

export { StaysProvider, StaysContext };

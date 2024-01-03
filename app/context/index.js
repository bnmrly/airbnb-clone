"use client";

import React, { useState } from "react";
import { fetchCardData } from "../lib/data";

const StaysContext = React.createContext();

const StaysProvider = async (props) => {
  const myName = "Ben Marley";
  const { staysData } = await fetchCardData();

  return (
    <StaysContext.Provider value={{ myName, staysData }}>
      {props.children}
    </StaysContext.Provider>
  );
};

export { StaysProvider, StaysContext };

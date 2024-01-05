"use client";

import React from "react";
import { fetchCardData } from "../lib/data";

const StaysContext = React.createContext();

const StaysProvider = async (props) => {
  const { staysData } = await fetchCardData();

  return (
    <StaysContext.Provider value={{ staysData }}>
      {props.children}
    </StaysContext.Provider>
  );
};

export { StaysProvider, StaysContext };

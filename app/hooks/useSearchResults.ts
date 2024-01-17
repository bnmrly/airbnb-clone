import { useState, useContext } from "react";
import { StaysContext } from "../context/StaysProvider";
import { Stay } from "../lib/types";

export const useSearchResults = () => {
  const appContext = useContext(StaysContext);
  const { staysData } = appContext;
  console.log("useSearchResults --- staysData:", staysData);
  const [totalGuestNumber, setTotalGuestNumber] = useState(9);

  // refactor so dont use state to set it - just read it from the url

  // maybe do a check on length for staysdsata for defensive

  const searchResults = staysData.filter((stay: Stay) => {
    return stay.maxGuests >= totalGuestNumber;
  });

  return [staysData, searchResults, totalGuestNumber, setTotalGuestNumber];
};

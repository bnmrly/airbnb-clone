import { useState, useContext } from "react";
import { StaysContext } from "@/app/context/staysProvider";
import { Stay } from "@/app/lib/types";

export const useSearchResults = () => {
  const appContext = useContext(StaysContext);
  const { staysData } = appContext;

  const [totalGuestNumber, setTotalGuestNumber] = useState<number>(6);

  // refactor so dont use state to set it - just read it from the url

  // maybe do a check on length for staysdsata for defensive

  const searchResults = staysData.filter((stay: Stay) => {
    return stay.maxGuests >= totalGuestNumber;
  });

  return [searchResults, totalGuestNumber, setTotalGuestNumber];
};

"use client";
import { useState, useEffect } from "react";
import { fetchCardData } from "@/app/lib/data";
import { Stay } from "@/app/lib/types";

// refactor so dont use state to set it - just read it from the url

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState<Stay[]>([]);

  const [totalGuestNumber, setTotalGuestNumber] = useState<number>(6);

  useEffect(() => {
    const getCardData = async () => await fetchCardData();
    try {
      getCardData().then((data) => {
        setSearchResults(
          data?.staysData.filter((stay: Stay) => {
            return stay.maxGuests >= totalGuestNumber;
          })
        );
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to fetch card data.");
    }
  }, [totalGuestNumber]);

  return { searchResults, totalGuestNumber, setTotalGuestNumber };
};

"use client";
import { useState, useEffect } from "react";
import { fetchCardData } from "@/app/lib/data";
import { Stay } from "@/app/lib/types";
import { useSearchParams } from "next/navigation";

// refactor so dont use state to set it - just read it from the url

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState<Stay[]>([]);

  const [totalGuestNumber, setTotalGuestNumber] = useState(6);

  const searchParams = useSearchParams();

  const childGuestNumber = searchParams.get("child");
  console.log("useSearchResults --- childGuestNumber:", childGuestNumber);

  const adultGuestNumber = searchParams.get("adults");
  console.log("useSearchResults --- adultGuestNumber:", adultGuestNumber);

  const location = searchParams.get("location");
  console.log("useSearchResults --- location:", location);

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

  return [searchResults, totalGuestNumber, setTotalGuestNumber] as const;
};

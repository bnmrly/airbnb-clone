"use client";
import { useState, useEffect } from "react";
import { fetchCardData } from "@/app/lib/data";
import { Stay } from "@/app/lib/types";
import { useSearchParams } from "next/navigation";

// refactor so dont use state to set it - just read it from the url

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState<Stay[]>([]);
  const searchParams = useSearchParams();
  const guests = searchParams.get("guests")
    ? Number(searchParams.get("guests"))
    : 0;

  // const location = searchParams.get("location");
  // console.log("useSearchResults --- location:", location);

  useEffect(() => {
    const getCardData = async () => await fetchCardData();
    try {
      getCardData().then((data) => {
        if (!guests) setSearchResults(data?.staysData);

        if (guests)
          setSearchResults(
            data?.staysData.filter((stay: Stay) => stay.maxGuests >= guests)
          );
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to fetch card data.");
    }
  }, [guests]);

  return [searchResults] as const;
};

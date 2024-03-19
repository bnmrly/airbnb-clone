"use client";
import { useState, useEffect } from "react";
import { fetchCardData } from "@/app/lib/data";
import { Stay } from "@/app/lib/types";
import { useSearchParams } from "next/navigation";
import { extractCityFromQueryParam } from "@/app/utilities/extractCityFromQueryParam";

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState<Stay[]>([]);
  const [uniqueLocations, setUniqueLocations] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const guests = searchParams.get("guests")
    ? Number(searchParams.get("guests"))
    : 0;

  const locationOption = searchParams.get("location") || uniqueLocations[0];

  const showResults = searchParams.get("showResults") || "";

  useEffect(() => {
    // TODO: FIX DEP ARRAY AS THIS IS FIRING THREE TIMES
    console.log("useEffect firing");
    const getCardData = async () => await fetchCardData();

    try {
      getCardData().then((data) => {
        const allCities: string[] = data?.staysData.map(
          (stay: Stay) => `${stay.city}-${stay.country}`
        );

        const uniqueCities = [...new Set(allCities)];

        setUniqueLocations(uniqueCities);

        if (!guests) setSearchResults(data?.staysData);

        if (guests && showResults) {
          const cityFromQuery = extractCityFromQueryParam(locationOption);

          const filteredResults = data.staysData.filter(
            (stay: Stay) =>
              stay.city.includes(cityFromQuery) && stay.maxGuests >= guests
          );

          setSearchResults(filteredResults);
        }
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to fetch card data.");
    }
  }, [guests, locationOption, showResults]);

  return [searchResults, locationOption, uniqueLocations] as const;
};

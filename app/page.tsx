"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CardsSkeleton,
  CardsHeadingContainerSkeleton,
} from "./ui/skeletons/skeletons";
import { Cards } from "@/app/ui/cards/cards";
import { Form } from "@/app/ui/form/form";

import { fetchCardData } from "@/app/lib/data";
import { Stay } from "@/app/lib/types";
import { useSearchParams } from "next/navigation";
import { extractCityFromQueryParam } from "@/app/utilities/extractCityFromQueryParam";

import styles from "@/app/page.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const useSearchResults = () => {
    const [searchResults, setSearchResults] = useState<Stay[] | null>(null);
    const [uniqueLocations, setUniqueLocations] = useState<string[]>([]);
    const searchParams = useSearchParams();
    const guests = searchParams.get("guests")
      ? Number(searchParams.get("guests"))
      : 0;

    const locationOption = searchParams.get("location") || uniqueLocations[0];

    const showResults = searchParams.get("showResults") || "";

    useEffect(() => {
      console.log("TODO: revisit useEffect");
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
            if (filteredResults.length === 0) {
              console.log("No results found");
              setSearchResults(null);
            } else setSearchResults(filteredResults);
          }
        });
      } catch (error) {
        console.error("Error:", error);
        throw new Error("Failed to fetch card data.");
      } finally {
        setLoading(false);
      }
    }, [guests, locationOption, showResults]);

    return [searchResults, locationOption, uniqueLocations] as const;
  };

  const [searchResults, locationOption, uniqueLocations] = useSearchResults();

  return (
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <a className={styles["link"]} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
        </a>
      </header>
      <main>
        <section>
          <Form
            locationOption={locationOption}
            uniqueLocations={uniqueLocations}
          />
        </section>
        <section>
          {loading && <CardsHeadingContainerSkeleton />}
          {loading && <CardsSkeleton />}
          {!loading && <Cards searchResults={searchResults} />}
        </section>
      </main>
    </div>
  );
};

export default Home;

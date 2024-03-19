"use client";
import React from "react";
import Image from "next/image";
import { useSearchResults } from "@/app/hooks/useSearchResults";
import { Cards } from "@/app/ui/cards/cards";
import { Form } from "@/app/ui/form/form";

import styles from "@/app/page.module.css";

const Home = () => {
  const [searchResults, locationOption, uniqueLocations] = useSearchResults();

  return (
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <a className={styles["link"]} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
        </a>
      </header>
      <main>
        {/* TODO: ADD SUSPENSE FALLBACK */}
        <section>
          <Form
            locationOption={locationOption}
            uniqueLocations={uniqueLocations}
          />
        </section>
        {/* {searchResults?.length > 0 && <Cards searchResults={searchResults} />} */}
        <section>
          <Cards searchResults={searchResults} />
        </section>
      </main>
    </div>
  );
};

export default Home;

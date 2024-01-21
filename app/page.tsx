"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchResults } from "./hooks/useSearchResults";
import { Cards } from "./ui/cards/cards";
import { Form } from "./ui/form/form";

import styles from "./page.module.css";

// look at import Cards from "@/app/ui/dashboard/cards";

const Home = () => {
  const [searchResults, totalGuestNumber, setTotalGuestNumber] =
    useSearchResults();

  return (
    // TODO: revisit this - header inside here
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <a className={styles["link"]} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
        </a>
      </header>
      <main>
        <Form
          totalGuestNumber={totalGuestNumber}
          setTotalGuestNumber={setTotalGuestNumber}
        />
        <Cards searchResults={searchResults} />
      </main>
    </div>
  );
};

export default Home;

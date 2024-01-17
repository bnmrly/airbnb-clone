"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchResults } from "./hooks/useSearchResults";
import { Cards } from "./ui/cards/cards";
import { Form } from "./ui/form/form";

import styles from "./page.module.css";

// look at import Cards from "@/app/ui/dashboard/cards";

const Home = () => {
  const [staysData, searchResults, totalGuestNumber, setTotalGuestNumber] =
    useSearchResults();
  console.log("Home --- searchResults:", searchResults);

  // fetch data on the server = good!

  // filter the data in here or in a hook that is used here

  // if it is in context, that would need to be fecthed on the client as i need to set search results according to the qwuery

  // cards will receive filtered data and not staysData
  // form will do the filtering

  return (
    // TODO: revisit this - header inside here
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <a className={styles["link"]} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
        </a>
      </header>
      <main>
        <Form totalGuestNumber={totalGuestNumber} />
        <Cards staysData={staysData} />
      </main>
    </div>
  );
};

export default Home;

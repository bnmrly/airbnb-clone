"use client";
import React from "react";
import Image from "next/image";
import { useSearchResults } from "@/app/hooks/useSearchResults";
import { Cards } from "@/app/ui/cards/cards";
import { Form } from "@/app/ui/form/form";

import styles from "@/app/page.module.css";

const Home = () => {
  const { searchResults, totalGuestNumber, setTotalGuestNumber } =
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
        {/* why was the type for totalGuestNumber const totalGuestNumber: number | React.Dispatch<React.SetStateAction<number>>  when I deconstructed it from an array */}

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

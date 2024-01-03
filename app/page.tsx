"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useContext } from "react";
import { Cards } from "./ui/cards/cards";
import { SearchBar } from "./ui/searchBar/searchBar";
import { FilterForm } from "./ui/filterForm/filterForm";
// check this import - import Cards from "@/app/ui/dashboard/cards";

import { StaysContext } from "./context/index";

const Home = () => {
  const appContext = useContext(StaysContext);
  const { staysData } = appContext;

  return (
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <a className={styles["link"]} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
        </a>
        <SearchBar staysData={staysData} />
        <FilterForm staysData={staysData} />
      </header>
      <main>
        <Cards staysData={staysData} />
      </main>
    </div>
  );
};

export default Home;

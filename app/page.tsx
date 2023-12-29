import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { fetchCardData } from "./lib/data";
import { Cards } from "./ui/cards/cards";
import { SearchBar } from "./ui/searchBar/searchBar";
import { FilterForm } from "./ui/cards/filterForm/filterForm";
// check this import - import Cards from "@/app/ui/dashboard/cards";

// arrow functions for components

const Home = async () => {
  const { staysData } = await fetchCardData();
  return (
    <div className={styles["app-container"]}>
      <header className={styles["airbnb-clone__header"]}>
        <a className={styles["airbnb-clone__home-link"]} href="/">
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

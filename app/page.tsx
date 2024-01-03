import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import { fetchCardData } from "./lib/data";
import { Cards } from "./ui/cards/cards";
import { SearchBar } from "./ui/searchBar/searchBar";
import { FilterForm } from "./ui/filterForm/filterForm";
// check this import - import Cards from "@/app/ui/dashboard/cards";

// arrow functions for components

const Home = async () => {
  const { staysData } = await fetchCardData();

  // this needs to be false
  // const [filterDrawerVisible, setFilterDrawerVisible] = useState(true);
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
        <Cards
          staysData={staysData}
          // setFilterDrawerVisible={setFilterDrawerVisible}
        />
      </main>
    </div>
  );
};

export default Home;

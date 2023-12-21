import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { fetchCardData } from "./lib/data";
import Cards from "./ui/cards/cards";

// check this import - import Cards from "@/app/ui/dashboard/cards";

// name of this function - home?

export default async function Home() {
  const { staysData } = await fetchCardData();
  return (
    <div className={styles["app-container"]}>
      <header className={styles["airbnb - clone__header"]}>
        <div className={styles["airbnb-clone__container"]}>
          <a className={styles["airbnb-clone__home-link"]} href="/">
            <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
          </a>
          {/* <SearchBar /> */}
        </div>
        {/* <FilterDrawer /> */}
      </header>
      <main>
        <Cards staysData={staysData} />
      </main>
    </div>
  );
}

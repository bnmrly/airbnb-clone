import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Cards from "./ui/cards";

// check this import - import Cards from "@/app/ui/dashboard/cards";

export default function Home() {
  return (
    <div className={styles.App}>
      <div className={styles["airbnb - clone__container"]}>
        <div className={styles["airbnb-clone__header"]}>
          <a className={styles["airbnb-clone__home-link"]} href="/">
            <Image src="/logo.svg" alt="logo" width={97} height={26} />
          </a>
          {/* <SearchBar /> */}
        </div>
        {/* <FilterDrawer /> */}
        <Cards />
      </div>
    </div>
  );
}

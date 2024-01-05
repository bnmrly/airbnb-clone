"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useContext } from "react";
import { Cards } from "./ui/cards/cards";
import { Form } from "./ui/form/form";

// look at import Cards from "@/app/ui/dashboard/cards";

import { StaysContext } from "./context/StaysProvider";

const Home = () => {
  const appContext = useContext(StaysContext);
  const { staysData } = appContext;

  return (
    // TODO: revisit this - header inside here
    <div className={styles["app-container"]}>
      <header className={styles["header"]}>
        <a className={styles["link"]} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={26} priority />
        </a>
      </header>
      <main>
        <Form staysData={staysData} />
        <Cards staysData={staysData} />
      </main>
    </div>
  );
};

export default Home;

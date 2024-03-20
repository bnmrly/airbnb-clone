import Image from "next/image";
import React from "react";
import { Stay } from "@/app/lib/types";

import styles from "@/app/ui/cards/cards.module.css";

export const Cards = ({ searchResults }: { searchResults: Stay[] | null }) => {
  return (
    <>
      {searchResults?.length && (
        <div className={styles["text-container"]}>
          <h1 className={styles["heading"]}>
            Stays in {searchResults[0].country}
          </h1>
          <p className={styles["result-count"]}>
            {searchResults.length > 1
              ? `${searchResults.length} stays`
              : `${searchResults.length} stay`}
          </p>
        </div>
      )}
      {searchResults?.length && (
        <div>
          <ul className={styles["list"]}>
            {searchResults.map((stay: Stay) => {
              return (
                <div key={stay.photo}>
                  <div
                    className={styles["card-image-container"]}
                    style={{
                      backgroundImage: `url(${stay.photo})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className={styles["card-description-container"]}>
                    {stay.superHost && (
                      <div className={styles["superhost"]}>Superhost</div>
                    )}

                    <p className={styles["type"]}>{stay.type} </p>
                    {stay.beds && (
                      <p className={styles["beds"]}>. {stay.beds} beds</p>
                    )}
                    <div className={styles["rating-container"]}>
                      <Image
                        className={styles["rating-image"]}
                        src="/star.svg"
                        alt="star rating"
                        height={17}
                        width={16}
                      />
                      <p className={styles["rating"]}>{stay.rating}</p>
                    </div>
                    <p className={styles["title"]}>{stay.title}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

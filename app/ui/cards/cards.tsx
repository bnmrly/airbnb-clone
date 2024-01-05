import Image from "next/image";
import React from "react";
import styles from "./cards.module.css";

interface Stay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export const Cards = ({ staysData }: { staysData: Stay[] }) => {
  // Come back to this class and use an id as is just being used for the grid-template area

  // staysData conditon for the heading needs changing to searchResults

  if (!staysData) return <p>No stays Data</p>;

  return (
    <>
      {staysData?.length && (
        <div className={styles["text-container"]}>
          <h1 className={styles["heading"]}>Stays in {staysData[0].country}</h1>
          <p className={styles["result-count"]}>
            {staysData.length > 1
              ? `${staysData.length} stays`
              : `${staysData.length} stay`}
          </p>
        </div>
      )}
      {!!staysData.length && (
        <div>
          <ul className={styles["list"]}>
            {staysData.map((stay: Stay) => {
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

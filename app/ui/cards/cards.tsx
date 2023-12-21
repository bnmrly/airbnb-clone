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

export default async function Ccards({ staysData }: { staysData: Stay[] }) {
  console.log("12345Cards --- staysData:", staysData);

  // Come back to this class and use an id as is just being used for the grid-template area

  // staysData conditon for the heading needs changing to searchResults

  return (
    <>
      {staysData.length > 0 && (
        <div className={styles["airbnb-clone__text-container"]}>
          <h1 className={styles["heading"]}>Stays in {staysData[0].country}</h1>
          <p className={styles["result-count"]}>
            {staysData.length > 1
              ? `${staysData.length} stays`
              : `${staysData.length} stay`}
          </p>
        </div>
      )}
      {!!staysData.length && (
        <div className={styles["cards-container"]}>
          <ul className={styles["list"]}>
            {staysData.map((stay: Stay) => {
              return (
                <div className={styles["card"]} key={stay.photo}>
                  <div
                    className={styles["card__image-container"]}
                    style={{
                      backgroundImage: `url(${stay.photo})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className={styles["card__meta-container"]}>
                    {stay.superHost && (
                      <div className={styles["card__meta-superhost"]}>
                        Superhost
                      </div>
                    )}

                    <p className={styles["card__meta-type"]}>{stay.type} </p>
                    {stay.beds && (
                      <p className={styles["card__meta-beds"]}>
                        . {stay.beds} beds
                      </p>
                    )}
                    <div className={styles["card-meta-rating__container"]}>
                      <Image
                        className={styles["card__rating-image"]}
                        src="/star.svg"
                        alt="star rating"
                        height={17}
                        width={16}
                      />
                      <p className={styles["card__meta-rating"]}>
                        {stay.rating}
                      </p>
                    </div>
                    <p className={styles["card__meta-title"]}>{stay.title}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

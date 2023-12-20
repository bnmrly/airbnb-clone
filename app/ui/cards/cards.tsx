import Image from "next/image";
import { fetchCardData } from "../../lib/data";
import styles from "./cards.module.css";

export default async function Cards() {
  const { staysData } = await fetchCardData();
  // console.log("----Cards --- staysData:", staysData);

  // Come back to this class and use an id as is just being used for the grid-template area
  return (
    <>
      {!!staysData.length && (
        <div className={styles["airbnb-clone__cards-container"]}>
          <ul className={styles["cards-list"]}>
            {staysData.map(
              (stay: {
                title: string;
                photo: string;
                superHost: string;
                type: string;
                beds: string;
                rating: string;
              }) => {
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
                          className={styles["airbnb-clone__rating-image"]}
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
              }
            )}
          </ul>
        </div>
      )}
    </>
  );
}

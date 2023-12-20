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
          {" "}
          <ul className={styles["airbnb-clone__cards-list"]}>
            {staysData.map((stay: { title: string; photo: string }) => {
              console.log("{staysData.map --- stay:", stay);
              return <p key={stay.photo}>{stay.title}</p>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

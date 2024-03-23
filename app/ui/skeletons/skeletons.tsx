import styles from "@/app/ui/skeletons/skeletons.module.css";

export const CardsHeadingContainerSkeleton = (): React.ReactElement => {
  return (
    <>
      <div className={styles["cards-skeleton-heading-container"]}>
        <div className={styles["cards-skeleton-heading"]}></div>
        <div className={styles["cards-skeleton-results"]}></div>
      </div>
    </>
  );
};

export const CardsSkeleton = () => {
  const skeletonArray: number[] = Array.from({ length: 14 }, (_, i) => i);

  return (
    <ul className={styles["cards-skeleton-list"]}>
      {skeletonArray.map((_, i) => (
        <li key={crypto.randomUUID()}>
          <CardSkeleton />
        </li>
      ))}
    </ul>
  );
};

const CardSkeleton = (): React.ReactElement => {
  return (
    <>
      <div className={styles["card-skeleton-image"]}></div>
      <div className={styles["card-skeleton-description-container"]}>
        <div
          className={styles["card-skeleton-description-meta-ratings-container"]}
        >
          <div className={styles["card-skeleton-meta"]}></div>
          <div className={styles["card-skeleton-ratings"]}></div>
        </div>
        <div className={styles["card-skeleton-description-title"]}></div>
      </div>
    </>
  );
};

import styles from "./rating.module.sass";
interface RatingProps {
  ratingValue: number;
}

export default function Rating({ ratingValue }: RatingProps) {
  const roundedRating = Math.round(ratingValue);
  console.log(Array(5).fill(null));

  return (
    <>
      <div className={styles.ratingBox} aria-hidden>
        {Array.from({ length: 5 }, (_, idx) => idx + 1).map((number) => (
          <span
            key={number}
            className={`${styles.ratingCircle} ${
              number <= roundedRating && styles.activeRatingCircle
            }`}
          />
        ))}
      </div>
      <span className={styles.ratingValue}>별점:{roundedRating}</span>
    </>
  );
}

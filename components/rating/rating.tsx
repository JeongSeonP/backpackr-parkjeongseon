import styles from "./rating.module.sass";
import { FaCircle } from "react-icons/fa";

interface RatingProps {
  ratingValue: number;
}

export default function Rating({ ratingValue }: RatingProps) {
  const roundedRating = Math.round(ratingValue);
  console.log(Array(5).fill(null));

  return (
    <div className={styles.ratingBox}>
      {Array(5)
        .fill(null)
        .map((_, idx) => (
          <span key={idx} className={styles.ratingCircle} />
        ))}
      <div className={styles.activeRatingBox}>
        {Array(roundedRating)
          .fill(null)
          .map((_, idx) => (
            <span key={idx} className={styles.activeRatingCircle} />
          ))}
      </div>
    </div>
  );
}

import styles from "./cardItem.module.sass";
import {
  CardDirections,
  HorizontalCardData,
  VerticalCardData,
} from "@/app/db/cardMockData";
import Image from "next/image";
import defaultThumbnail from "@/public/assets/thumbnail.jpg";
import Rating from "../rating/rating";

interface CardItemProps {
  direction: CardDirections;
  data: VerticalCardData | HorizontalCardData;
}

export default function CardItem({ direction, data }: CardItemProps) {
  const isVertical = direction == "vertical" ? true : false;
  const cardStyle = isVertical ? styles.verticalCard : styles.horizontalCard;

  if (isVertical) {
    const verticalData = data as VerticalCardData;
    return (
      <li className={`${styles.cardItem} ${cardStyle}`}>
        <div className={styles.cardThumbCover}>
          <Image
            src={verticalData.thumbnail ?? defaultThumbnail}
            sizes="33vw"
            fill
            alt="썸네일 이미지"
            className={styles.cardThumbImage}
          />
        </div>
        <div>
          <div className={styles.cardTop}>
            <div className={styles.cardLabel}>{verticalData.cardLabel}</div>
            <div className={styles.cardTitle}>{verticalData.cardTitle}</div>
            <div className={styles.cardText}>
              <div className={styles.highlightText}>
                {verticalData.highlightText}
              </div>
              <div className={styles.crossOutText}>
                {verticalData.crossOutText}
              </div>
            </div>
          </div>
          {verticalData.rating && (
            <div className={styles.cardBottom}>
              <Rating ratingValue={verticalData.rating} />
              {verticalData.comment && (
                <p className={styles.singleLineComment}>
                  {verticalData.comment}
                </p>
              )}
            </div>
          )}
        </div>
      </li>
    );
  } else {
    const horizontalData = data as HorizontalCardData;
    return (
      <li className={`${styles.cardItem} ${cardStyle}`}>
        <div className={styles.cardThumbCover}>
          <Image
            src={horizontalData.thumbnail ?? defaultThumbnail}
            sizes="33vw"
            fill
            alt="썸네일 이미지"
            className={styles.cardThumbImage}
          />
        </div>
        <div className={styles.cardReview}>
          <div className={styles.commentTitle}>
            {horizontalData.commentTitle}
          </div>
          <div className={styles.multiLiensComment}>
            {horizontalData.comment}
          </div>
          <div className={styles.ratingBlock}>
            <Rating ratingValue={horizontalData.rating} />
            <div className={styles.userName}>{horizontalData.userName}</div>
          </div>
        </div>
      </li>
    );
  }
}

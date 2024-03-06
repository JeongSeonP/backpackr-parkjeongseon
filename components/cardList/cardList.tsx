import styles from "./cardList.module.sass";
import CardItem from "../cardItem/cardItem";
import { horizontalCardData, verticalCardData } from "@/app/db/cardMockData";

export default function CardList() {
  return (
    <ul className={styles.cardList}>
      {verticalCardData.map((data) => (
        <CardItem key={data.itemId} direction={"vertical"} data={data} />
      ))}
      {horizontalCardData.map((data) => (
        <CardItem key={data.reviewId} direction={"horizontal"} data={data} />
      ))}
    </ul>
  );
}

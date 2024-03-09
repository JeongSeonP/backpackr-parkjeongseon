import styles from "./cardList.module.sass";
import CardItem from "../cardItem/cardItem";
import { HorizontalCardData, VerticalCardData } from "@/db/cardMockData";
import { getProductList } from "@/app/services/product";
import { getReviewList } from "@/app/services/review";

export default async function CardList() {
  const productList: VerticalCardData[] = await getProductList();
  const reviewList: HorizontalCardData[] = await getReviewList();

  return (
    <ul className={styles.cardList}>
      {productList.map((data) => (
        <CardItem key={data.itemId} direction={"vertical"} data={data} />
      ))}
      {reviewList.map((data) => (
        <CardItem key={data.reviewId} direction={"horizontal"} data={data} />
      ))}
    </ul>
  );
}

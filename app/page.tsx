import styles from "./page.module.sass";
import Section from "@/components/common/section";
import CardList from "@/components/cardList/cardList";
import Form from "@/components/form/form";
import TopBtn from "@/components/common/topBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section title={"1. 카드 UI"}>
        <CardList />
      </Section>
      <Section title={"2. 입력 폼 UI"}>
        <Form />
      </Section>
      <TopBtn />
    </main>
  );
}

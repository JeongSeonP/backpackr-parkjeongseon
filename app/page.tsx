import styles from "./page.module.sass";
import Profile from "@/components/profile/profile";
import Section from "@/components/common/section";
import CardList from "@/components/cardList/cardList";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>백패커 프론트엔드 과제</h1>
      <Profile />
      <Section title={"1. 카드 UI"}>
        <CardList />
      </Section>
      <Section title={"2. 입력 폼 UI"}>
        <div>입력폼</div>
      </Section>
    </main>
  );
}

import Profile from "@/components/profile/profile";
import styles from "./page.module.sass";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>백패커 프론트엔드 과제</h1>
      <Profile />
    </main>
  );
}

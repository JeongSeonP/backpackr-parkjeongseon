import styles from "./header.module.sass";
import Profile from "../profile/profile";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>백패커 프론트엔드 과제</h1>
      <Profile />
    </header>
  );
}

"use client";

import styles from "./topButton.module.sass";
import { BiArrowToTop } from "react-icons/bi";

export default function TopBtn() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button type="button" onClick={scrollToTop} className={styles.button}>
      <span className={styles.description}>최상단이동버튼</span>
      <div className={styles.icon}>
        <BiArrowToTop size="24" />
      </div>
    </button>
  );
}

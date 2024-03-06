import styles from "./heading.module.sass";

interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return <h2 className={styles.h2}>{children}</h2>;
}

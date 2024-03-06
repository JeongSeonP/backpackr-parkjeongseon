import styles from "./section.module.sass";
import Heading from "./heading";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
}

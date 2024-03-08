"use client";

import styles from "./form.module.sass";
import TextInput from "../textInput/textInput";
import { textInputOptions } from "@/db/inputOptions";

export default function Form() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {textInputOptions.map((option, idx) => (
        <TextInput key={idx} option={option} />
      ))}
    </form>
  );
}

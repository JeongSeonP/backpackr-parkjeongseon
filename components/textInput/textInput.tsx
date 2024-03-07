"use client";

import { ChangeEvent, useRef, useState } from "react";
import styles from "./textInput.module.sass";
import { TextInputOption } from "../form/form";

interface TextInputProps {
  option: TextInputOption;
}

export default function TextInput({ option }: TextInputProps) {
  const maxInputLength = 500;
  const [inputValue, setInputValue] = useState(option.initialValue);
  const disabledState = option.state == "disabled" ? true : false;
  const readonlyState = option.state == "readonly" ? true : false;
  const isTyping = useRef(false);

  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    isTyping.current = option.initialValue !== e.target.value ? true : false;
  };

  return (
    <div className={styles.textInputContainer}>
      <div
        className={`${styles.textInputBlock} ${
          isTyping.current && styles.activeInputBlock
        }`}
      >
        <textarea
          value={inputValue}
          placeholder={option.placeHolder}
          onChange={(e) => onInputChange(e)}
          className={styles.input}
          maxLength={500}
          disabled={disabledState}
          readOnly={readonlyState}
          spellCheck={false}
        />
        <span className={styles.remainingLength}>
          {maxInputLength - inputValue.length}
        </span>
      </div>
      {isTyping.current && <button className={styles.saveButton}>Save</button>}
    </div>
  );
}

"use client";

import { ChangeEvent, useRef, useState } from "react";
import styles from "./textInput.module.sass";
import { TextInputOption } from "@/db/inputOptions";

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
        <label>
          <span className={styles.labelText}>{option.label}</span>
          <textarea
            value={inputValue}
            placeholder={option.placeHolder}
            onChange={(e) => onInputChange(e)}
            className={styles.input}
            maxLength={maxInputLength}
            disabled={disabledState}
            readOnly={readonlyState}
            spellCheck={false}
          />
        </label>

        <span className={styles.remainingLength}>
          {maxInputLength - inputValue.length}
        </span>
      </div>
      {isTyping.current && (
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      )}
    </div>
  );
}

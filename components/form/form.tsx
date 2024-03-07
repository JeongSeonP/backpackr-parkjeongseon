import styles from "./form.module.sass";
import TextInput from "../textInput/textInput";

export interface TextInputOption {
  state: "default" | "disabled" | "readonly";
  placeHolder: string;
  initialValue: string;
}

export default function Form() {
  const textInputOptions: TextInputOption[] = [
    {
      state: "default",
      placeHolder: "내용을 입력해 주세요.",
      initialValue: "초기값이 있을 수 있습니다.",
    },
    {
      state: "disabled",
      placeHolder: "주문 요청사항을 입력해 주세요.",
      initialValue: "",
    },
    {
      state: "readonly",
      placeHolder: "",
      initialValue: "읽기 전용 상태입니다.",
    },
  ];

  return (
    <form className={styles.form}>
      {textInputOptions.map((option, idx) => (
        <TextInput key={idx} option={option} />
      ))}
    </form>
  );
}

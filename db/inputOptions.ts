export interface TextInputOption {
  state: "default" | "disabled" | "readonly";
  label: string;
  placeHolder: string;
  initialValue: string;
}

export const textInputOptions: TextInputOption[] = [
  {
    state: "default",
    label: "옵션사항",
    placeHolder: "내용을 입력해 주세요.",
    initialValue: "초기값이 있을 수 있습니다.",
  },
  {
    state: "disabled",
    label: "주문요청사항",
    placeHolder: "주문 요청사항을 입력해 주세요.",
    initialValue: "",
  },
  {
    state: "readonly",
    label: "알림사항",
    placeHolder: "",
    initialValue: "읽기 전용 상태입니다.",
  },
];

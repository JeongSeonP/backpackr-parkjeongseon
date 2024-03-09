import TextInput from "@/components/textInput/textInput";
import { textInputOptions } from "@/db/inputOptions";
import { fireEvent, render, screen } from "@testing-library/react";

it("changes UI during user's typing", () => {
  const option = textInputOptions[0];

  const { container } = render(<TextInput option={option} />);

  const textareaElement = screen.getByRole("textbox");
  fireEvent.focus(textareaElement);
  fireEvent.input(textareaElement, { target: { value: "입력 중입니다." } });

  const saveButton = screen.getByRole("button");
  const textAreaInActiveStyle = container.querySelector(".activeInputBlock");

  expect(saveButton).toBeInTheDocument();
  expect(textAreaInActiveStyle).toBeInTheDocument();
});

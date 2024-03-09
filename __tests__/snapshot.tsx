import CardItem from "@/components/cardItem/cardItem";
import Form from "@/components/form/form";
import { horizontalCardData, verticalCardData } from "@/db/cardMockData";
import { render } from "@testing-library/react";

it("renders cardItem unchanged", () => {
  const verticalMockData = verticalCardData[0];
  const horizontalMockData = horizontalCardData[0];
  const { container } = render(
    <>
      <CardItem direction={"vertical"} data={verticalMockData} />
      <CardItem direction={"horizontal"} data={horizontalMockData} />
    </>
  );
  expect(container).toMatchSnapshot();
});

it("renders textInputs unchanged", () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});

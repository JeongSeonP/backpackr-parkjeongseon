import Rating from "@/components/rating/rating";
import { render } from "@testing-library/react";

it("renders correct rating value", () => {
  const ratingValue = 4.9;
  const roundedRating = Math.round(ratingValue);

  const { container } = render(<Rating ratingValue={ratingValue} />);

  const ratingForScreenReader = container.querySelector(".ratingValue");
  const ratingOnScreen = container.querySelectorAll(".activeRatingCircle");

  expect(ratingForScreenReader?.textContent).toBe(`별점:${roundedRating}`);
  expect(ratingOnScreen.length).toBe(roundedRating);
});

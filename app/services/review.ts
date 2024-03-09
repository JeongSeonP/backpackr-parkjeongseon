import { API_URL } from "../constants/urls";

export async function getReviewList() {
  try {
    const res = await fetch(`${API_URL}/api/reviews`, {
      headers: { "Content-type": "application/json" },
      cache: "no-store",
    });
    const { reviews } = await res.json();
    return reviews;
  } catch (error) {
    throw new Error(`getReviewList Error: Time(${new Date()}) ERROR ${error}`);
  }
}

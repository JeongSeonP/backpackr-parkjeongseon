import { getReviews } from "@/db/cardMockData";

export async function GET() {
  const reviews = getReviews();
  return Response.json({ reviews });
}

import { getReviews } from "@/db/cardMockData";

export const dynamic = "force-dynamic";

export async function GET() {
  const reviews = getReviews();
  return Response.json({ reviews });
}

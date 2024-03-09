import { getProducts } from "@/db/cardMockData";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = getProducts();
  return Response.json({ products });
}

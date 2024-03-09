import { getProducts } from "@/db/cardMockData";

export async function GET() {
  const products = getProducts();
  return Response.json({ products });
}

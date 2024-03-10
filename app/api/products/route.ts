import { getProducts } from "@/db/cardMockData";

//백엔드 API를 대체하기위한 목업서버의 역할로서 구성한 route handler입니다.
//세로형 카드에 필요할 것으로 예상해본 Product list 데이터를 db폴더의 cardMockData.ts로부터 불러오는 역할을 수행합니다.

export async function GET() {
  const products = getProducts();
  return Response.json({ products });
}

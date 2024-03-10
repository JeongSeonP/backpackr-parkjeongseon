import { API_URL } from "../constants/urls";

//목업서버를 통해 데이터를 호출하므로 실제로 활용할 때는 actual 백엔드API로 교체되어야 할 부분입니다.

export async function getProductList() {
  try {
    const res = await fetch(`${API_URL}/api/products`, {
      headers: { "Content-type": "application/json" },
      cache: "no-store",
    });
    const { products } = await res.json();
    return products;
  } catch (error) {
    throw new Error(`getProductList Error: Time(${new Date()}) ERROR ${error}`);
  }
}

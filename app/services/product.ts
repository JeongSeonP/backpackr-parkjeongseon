import { API_URL } from "../constants/urls";

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

import { API_URL } from "../constants/urls";

export async function getProductList() {
  try {
    const res = await fetch(`${API_URL}/api/products`, {
      next: { tags: ["products"] },
    });
    const { products } = await res.json();
    return products;
  } catch (error) {
    throw new Error(`getProductList Error: Time(${new Date()}) ERROR ${error}`);
  }
}

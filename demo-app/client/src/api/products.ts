export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  inStock: boolean;
  stock: number;
  rating: number;
  description: string;
  imageUrl: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/api/products`);

  if (!response.ok) {
    throw new Error(`Failed to load products: ${response.status}`);
  }

  return response.json();
}

export async function getProduct(productId: string): Promise<Product> {
  const response = await fetch(
    `${API_BASE_URL}/api/products/${productId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to load product: ${response.status}`);
  }

  return response.json();
}
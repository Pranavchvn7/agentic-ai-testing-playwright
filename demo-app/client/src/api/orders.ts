export interface CheckoutCustomer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderSummary {
  orderId: string;
  customer: CheckoutCustomer;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  couponCode: string | null;
}

export async function createOrder(payload: {
  customer: CheckoutCustomer;
  items: OrderItem[];
  couponCode: string | null;
}): Promise<OrderSummary> {
  const response = await fetch("http://localhost:4000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorResponse = await response.json().catch(() => null);

    throw new Error(
      errorResponse?.error ?? `Failed to create order: ${response.status}`
    );
  }

  return response.json();
}
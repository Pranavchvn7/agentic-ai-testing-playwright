import express from "express";
import cors from "cors";
import products from "./data/products.json" with { type: "json" };
import { randomUUID } from "node:crypto";

const app = express();
const PORT = 4000;
const recentOrderSubmissions = new Set<string>();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "ShopLite API is running",
    endpoints: ["/api/health", "/api/products"]
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "ShopLite API",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/products", (_req, res) => {
  res.json(products);
});

app.get("/api/products/p-999", (_req, res) => {
  res.status(500).json({
    error: "Unable to load this product. Please try again later."
  });
});

app.get("/api/products/:productId", (req, res) => {
  const product = products.find(
    (item) => item.id === req.params.productId
  );

  if (!product) {
    res.status(404).json({
      error: "Product not found"
    });

    return;
  }

  res.json(product);
});

app.post("/api/cart/coupon", (req, res) => {
  const { code, subtotal } = req.body ?? {};

  if (code === "SAVE10") {
    res.json({
      valid: true,
      code,
      discount: subtotal * 0.1,
      message: "Coupon applied: 10% discount."
    });

    return;
  }

  if (code === "EXPIRED10") {
    res.status(400).json({
      valid: false,
      code,
      discount: 0,
      error: "This coupon has expired."
    });

    return;
  }

  res.status(400).json({
    valid: false,
    code,
    discount: 0,
    error: "Invalid coupon code."
  });
});

app.listen(PORT, () => {
  console.log(`ShopLite API running at http://localhost:${PORT}`);
});

app.post("/api/orders", (req, res) => {
  const submissionKey = JSON.stringify({
    customer: req.body?.customer,
    items: req.body?.items,
    couponCode: req.body?.couponCode
  });

  if (recentOrderSubmissions.has(submissionKey)) {
    res.status(409).json({
      error: "This order has already been submitted. Please refresh the page."
    });

    return;
  }

  recentOrderSubmissions.add(submissionKey);
  const { customer, items, couponCode } = req.body ?? {};

  const validationErrors: string[] = [];

  if (!customer?.fullName?.trim()) {
    validationErrors.push("Full name is required.");
  }

  if (!customer?.email?.trim()) {
    validationErrors.push("Email is required.");
  }

  if (!customer?.phone?.trim()) {
    validationErrors.push("Phone is required.");
  }

  if (!customer?.address?.trim()) {
    validationErrors.push("Address is required.");
  }

  if (!customer?.city?.trim()) {
    validationErrors.push("City is required.");
  }

  if (!customer?.postalCode?.trim()) {
    validationErrors.push("Postal code is required.");
  }

  if (!customer?.country?.trim()) {
    validationErrors.push("Country is required.");
  }

  if (!Array.isArray(items) || items.length === 0) {
    validationErrors.push("Cart must contain at least one item.");
  }

  if (validationErrors.length > 0) {
    res.status(400).json({
      error: validationErrors.join(" ")
    });

    return;
  }

  const orderItems = items.map((item: any) => ({
    productId: item.productId,
    name: item.name,
    price: item.price,
    quantity: item.quantity
  }));

  const subtotal = orderItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  const isValidCoupon = couponCode === "SAVE10";
  const discount = isValidCoupon ? subtotal * 0.1 : 0;
  const discountedSubtotal = subtotal - discount;
  const tax = discountedSubtotal * 0.18;
  const shipping = discountedSubtotal > 0 && discountedSubtotal < 1000 ? 99 : 0;
  const total = discountedSubtotal + tax + shipping;

  const order = {
    orderId: `ORD-${new Date().getFullYear()}-${randomUUID().slice(0, 8)}`,
    customer,
    items: orderItems,
    subtotal,
    discount,
    tax,
    shipping,
    total,
    couponCode: isValidCoupon ? couponCode : null
  };

  res.status(201).json(order);
});
import express from "express";
import cors from "cors";
import products from "./data/products.json" with { type: "json" };

const app = express();
const PORT = 4000;

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

app.listen(PORT, () => {
  console.log(`ShopLite API running at http://localhost:${PORT}`);
});
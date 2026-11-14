import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct, type Product } from "../api/products";
import { useCart } from "../context/CartContext";

export function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    let isActive = true;

    async function loadProduct() {
      try {
        const data = await getProduct(productId ?? "");

        if (isActive) {
          setProduct(data);
        }
      } catch {
        if (isActive) {
          setError("Unable to load this product.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      isActive = false;
    };
  }, [productId]);

  if (isLoading) {
    return <p role="status">Loading product…</p>;
  }

  if (error || !product) {
    return (
      <main>
        <p role="alert">{error ?? "Product not found."}</p>
        <Link to="/">Back to products</Link>
      </main>
    );
  }

  return (
    <main>
      <Link to="/">Back to products</Link>

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        {product.currency} {product.price}
      </p>
      <p>{product.category}</p>
      <p>
        {product.inStock
          ? `In stock: ${product.stock}`
          : "Out of stock"}
      </p>

      <button
        type="button"
        disabled={!product.inStock}
        onClick={() => addItem(product)}
      >
        Add to cart
      </button>
    </main>
  );
}
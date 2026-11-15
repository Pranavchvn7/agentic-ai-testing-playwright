import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, type Product } from "../api/products";

export function ProductCatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    async function loadProducts() {
      try {
        const data = await getProducts();

        if (isActive) {
          setProducts(data);
        }
      } catch {
        if (isActive) {
          setError("Unable to load products. Please try again later.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isActive = false;
    };
  }, []);

  if (isLoading) {
    return <p role="status">Loading products…</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <main>
      <header>
        <h1>ShopLite Products</h1>
      </header>

      <ul aria-label="Product catalog">
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h2>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <img
                  src="/images/keyboard.svg"
                  alt="Aurora Wireless Keyboard product image"
                />
              </h2>
              <p>
                {product.currency} {product.price}
              </p>
              <p>{product.category}</p>
              <p>
                {product.inStock
                  ? `In stock: ${product.stock}`
                  : "Out of stock"}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
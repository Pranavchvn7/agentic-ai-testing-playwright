import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart();

  const tax = subtotal * 0.18;
  const shipping = subtotal > 0 && subtotal < 1000 ? 99 : 0;
  const total = subtotal + tax + shipping;

  return (
    <main>
      <h1>Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p aria-live="polite">
            {itemCount} {itemCount === 1 ? "item" : "items"} in cart
          </p>

          <ul aria-label="Cart items">
            {items.map(({ product, quantity }) => (
              <li key={product.id}>
                <article>
                  <h2>{product.name}</h2>
                  <p>
                    {product.currency} {product.price}
                  </p>

                  <label htmlFor={`quantity-${product.id}`}>
                    Quantity
                  </label>
                  <input
                    id={`quantity-${product.id}`}
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(event) =>
                      updateQuantity(
                        product.id,
                        Number(event.target.value)
                      )
                    }
                  />

                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                </article>
              </li>
            ))}
          </ul>

          <dl>
            <dt>Subtotal</dt>
            <dd>₹{subtotal.toFixed(2)}</dd>

            <dt>Tax</dt>
            <dd>₹{tax.toFixed(2)}</dd>

            <dt>Shipping</dt>
            <dd>₹{shipping.toFixed(2)}</dd>

            <dt>Total</dt>
            <dd>₹{total.toFixed(2)}</dd>
          </dl>

          <Link to="/checkout">Proceed to checkout</Link>
        </>
      )}
    </main>
  );
}
import { Link, useLocation } from "react-router-dom";
import type { OrderSummary } from "../api/orders";

export function OrderConfirmationPage() {
  const location = useLocation();
  const order = location.state?.order as OrderSummary | undefined;

  if (!order) {
    return (
      <main>
        <h1>Order confirmation</h1>
        <p role="alert">No order details were found.</p>
        <Link to="/">Back to products</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Order confirmed</h1>

      <p role="status">
        Thank you, {order.customer.fullName}. Your order has been placed.
      </p>

      <p>
        Order ID: <strong>{order.orderId}</strong>
      </p>

      <section aria-labelledby="order-details-heading">
        <h2 id="order-details-heading">Order details</h2>

        <ul aria-label="Ordered items">
          {order.items.map((item) => (
            <li key={item.productId}>
              {item.name} × {item.quantity} — ₹
              {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>

        <dl>
          <dt>Subtotal</dt>
          <dd>₹{order.subtotal.toFixed(2)}</dd>

          {order.discount > 0 && (
            <>
              <dt>Discount</dt>
              <dd>-₹{order.discount.toFixed(2)}</dd>
            </>
          )}

          <dt>Tax</dt>
          <dd>₹{order.tax.toFixed(2)}</dd>

          <dt>Shipping</dt>
          <dd>₹{order.shipping.toFixed(2)}</dd>

          <dt>Total</dt>
          <dd>₹{order.total.toFixed(2)}</dd>
        </dl>
      </section>

      <Link to="/">Continue shopping</Link>
    </main>
  );
}
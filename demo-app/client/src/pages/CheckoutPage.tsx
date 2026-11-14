import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  createOrder,
  type CheckoutCustomer,
  type OrderSummary
} from "../api/orders";

const EMPTY_CUSTOMER: CheckoutCustomer = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  country: "India"
};

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<CheckoutCustomer>(EMPTY_CUSTOMER);
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const discountedSubtotal = subtotal - discount;
  const tax = discountedSubtotal * 0.18;
  const shipping =
    discountedSubtotal > 0 && discountedSubtotal < 1000 ? 99 : 0;
  const total = discountedSubtotal + tax + shipping;

  function updateCustomer(
    field: keyof CheckoutCustomer,
    value: string
  ) {
    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [field]: value
    }));
  }

  async function applyCoupon() {
    setCouponMessage(null);
    setCouponError(null);

    try {
      const response = await fetch(
        "http://localhost:4000/api/cart/coupon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            code: couponCode,
            subtotal
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setCouponError(data.error ?? "Unable to apply coupon.");
        setDiscount(0);

        return;
      }

      setDiscount(data.discount);
      setCouponMessage(data.message);
    } catch {
      setCouponError("Unable to apply coupon. Please try again.");
    }
  }

  async function placeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (items.length === 0) {
      setSubmitError("Your cart is empty.");

      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const order = await createOrder({
        customer,
        items: items.map((item) => ({
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity
        })),
        couponCode: discount > 0 ? couponCode : null
      });

      clearCart();
      navigate("/order-confirmation", {
        state: {
          order
        }
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to place order. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (items.length === 0) {
    return (
      <main>
        <h1>Checkout</h1>
        <p role="alert">Your cart is empty.</p>
        <Link to="/">Back to products</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Checkout</h1>

      <section aria-labelledby="order-summary-heading">
        <h2 id="order-summary-heading">Order summary</h2>

        <ul aria-label="Checkout items">
          {items.map(({ product, quantity }) => (
            <li key={product.id}>
              {product.name} × {quantity} — ₹
              {(product.price * quantity).toFixed(2)}
            </li>
          ))}
        </ul>

        <dl>
          <dt>Subtotal</dt>
          <dd>₹{subtotal.toFixed(2)}</dd>

          {discount > 0 && (
            <>
              <dt>Discount</dt>
              <dd>-₹{discount.toFixed(2)}</dd>
            </>
          )}

          <dt>Tax</dt>
          <dd>₹{tax.toFixed(2)}</dd>

          <dt>Shipping</dt>
          <dd>₹{shipping.toFixed(2)}</dd>

          <dt>Total</dt>
          <dd>₹{total.toFixed(2)}</dd>
        </dl>
      </section>

      <section aria-labelledby="coupon-heading">
        <h2 id="coupon-heading">Coupon</h2>

        <label htmlFor="coupon-code">Coupon code</label>
        <input
          id="coupon-code"
          value={couponCode}
          onChange={(event) => setCouponCode(event.target.value)}
        />

        <button type="button" onClick={applyCoupon}>
          Apply coupon
        </button>

        {couponMessage && <p role="status">{couponMessage}</p>}
        {couponError && <p role="alert">{couponError}</p>}
      </section>

      <form onSubmit={placeOrder} noValidate>
        <h2>Customer details</h2>

        <label htmlFor="full-name">Full name</label>
        <input
          id="full-name"
          value={customer.fullName}
          onChange={(event) => updateCustomer("fullName", event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={customer.email}
          onChange={(event) => updateCustomer("email", event.target.value)}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          value={customer.phone}
          onChange={(event) => updateCustomer("phone", event.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          value={customer.address}
          onChange={(event) => updateCustomer("address", event.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          value={customer.city}
          onChange={(event) => updateCustomer("city", event.target.value)}
        />

        <label htmlFor="postal-code">Postal code</label>
        <input
          id="postal-code"
          value={customer.postalCode}
          onChange={(event) =>
            updateCustomer("postalCode", event.target.value)
          }
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={customer.country}
          onChange={(event) => updateCustomer("country", event.target.value)}
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        {submitError && <p role="alert">{submitError}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Placing order…" : "Place order"}
        </button>
      </form>
    </main>
  );
}
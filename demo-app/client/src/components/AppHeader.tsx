import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function AppHeader() {
  const { itemCount } = useCart();

  return (
    <header>
      <nav aria-label="Main navigation">
        <Link to="/">ShopLite</Link>
        <Link to="/cart">
          Cart ({itemCount})
        </Link>
      </nav>
    </header>
  );
}
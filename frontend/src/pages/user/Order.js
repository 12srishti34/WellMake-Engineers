import { useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import "./Order.css";

function Order() {
  const { cartItems, getTotal } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const orders = cartItems.map((item) => ({
        productId: item._id || item.id,
        name: item.title,
        quantity: item.quantity,
        imageUrl: item.imageUrl,
      }));

      const response = await axios.post(
        "http://localhost:9000/api/order/place",
        {
          name,
          email,
          address,
          note,
          orders,
          total: getTotal(),
          paymentId: null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Order placed:", response.data);
      alert("Order placed successfully!");

      setName("");
      setEmail("");
      setAddress("");
      setNote("");
    } catch (error) {
      console.error("❌ Error placing order", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="order-container">
      <form className="order-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Checkout</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                rows="3"
                required
                placeholder="Full delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Cart Summary</label>
              <ul style={{ paddingLeft: "18px" }}>
                {cartItems.map((item) => (
                  <li key={item.id || item._id}>
                    {item.title} — Qty: {item.quantity} — ₹
                    {item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Total: ₹{getTotal()}
              </p>
            </div>

            <div className="form-group">
              <label>Additional Note (Optional)</label>
              <textarea
                rows="3"
                placeholder="Any specific requirement"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={placeOrder}
              style={{ marginTop: "16px" }}
            >
              Place Order
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Order;


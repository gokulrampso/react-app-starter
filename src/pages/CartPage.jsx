import { useState } from "react";

function CartPage({
  cart,
  onIncreaseQty,
  onDecreaseQty,
  onRemove,
  onCheckout,
}) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", payment: "card" });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Save order to localStorage orderHistory
    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
      total,
    };
    const history = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    localStorage.setItem("orderHistory", JSON.stringify([order, ...history]));
    setOrderPlaced(true);
    onCheckout();
  };

  if (orderPlaced) {
    return (
      <div
        style={{
          maxWidth: 600,
          margin: "3rem auto",
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: 700, marginBottom: 16, color: "#22c55e" }}>
          Thank you for your order!
        </h2>
        <p>Your order has been placed and will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888", margin: "3rem 0" }}>
          <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>
            🛒
          </span>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
            {cart.map((item) => (
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid #f3f4f6",
                }}
                key={item.id}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                      borderRadius: 8,
                      border: "1px solid #eee",
                    }}
                  />
                  <span>{item.title}</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 8,
                      border: "1px solid #eee",
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#0d6efd",
                        fontWeight: 700,
                        width: 28,
                        height: 28,
                        cursor: "pointer",
                        fontSize: 18,
                        opacity: item.qty === 1 ? 0.5 : 1,
                      }}
                      type="button"
                      onClick={() => onDecreaseQty(item.id)}
                      disabled={item.qty === 1}
                    >
                      –
                    </button>
                    <input
                      type="text"
                      style={{
                        width: 32,
                        textAlign: "center",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                      }}
                      value={item.qty}
                      readOnly
                    />
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#0d6efd",
                        fontWeight: 700,
                        width: 28,
                        height: 28,
                        cursor: "pointer",
                        fontSize: 18,
                      }}
                      type="button"
                      onClick={() => onIncreaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 700, color: "#0d6efd" }}>
                    ₹{item.price * item.qty}
                  </span>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#dc3545",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                    onClick={() => onRemove(item.id)}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 20 }}>Total:</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#22c55e" }}>
              ₹{total}
            </span>
          </div>
          {!showCheckout ? (
            <button
              style={{
                background: "linear-gradient(90deg, #22c55e 60%, #16a34a 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.75rem 0",
                fontWeight: 700,
                width: "100%",
                fontSize: 18,
                cursor: "pointer",
                marginBottom: 32,
              }}
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          ) : (
            <form
              onSubmit={handlePlaceOrder}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                padding: 32,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              <h4 style={{ fontWeight: 700, marginBottom: 24 }}>Checkout</h4>
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{ display: "block", fontWeight: 600, marginBottom: 6 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    border: "1px solid #eee",
                    fontSize: 16,
                  }}
                />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{ display: "block", fontWeight: 600, marginBottom: 6 }}
                >
                  Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleInput}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    border: "1px solid #eee",
                    fontSize: 16,
                    minHeight: 64,
                  }}
                />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{ display: "block", fontWeight: 600, marginBottom: 6 }}
                >
                  Payment Method
                </label>
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleInput}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    border: "1px solid #eee",
                    fontSize: 16,
                  }}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "0.75rem 0",
                  fontWeight: 700,
                  width: "100%",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                Place Order
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default CartPage;

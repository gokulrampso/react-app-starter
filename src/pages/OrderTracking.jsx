import { useState } from "react";

function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // Simulate tracking (in real app, fetch from backend)
    setStatus(
      orderId ? "Your order is on the way! Expected delivery in 2 days." : null
    );
  };

  return (
    <div style={{ maxWidth: 600, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>
        Order Tracking
      </h1>
      <p style={{ fontSize: 18, marginBottom: 18, color: "#374151" }}>
        Enter your order number below to track your shipment. For help, contact
        our support team.
      </p>
      <form onSubmit={handleTrack} style={{ maxWidth: 400, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            placeholder="Order Number"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            style={{
              flex: 1,
              padding: "0.5rem 1rem",
              borderRadius: 8,
              border: "1px solid #eee",
              fontSize: 16,
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.5rem 1.5rem",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Track
          </button>
        </div>
      </form>
      {status && (
        <div
          style={{
            background: "#e0e7ff",
            color: "#374151",
            borderRadius: 8,
            padding: 16,
            marginBottom: 0,
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
}

export default OrderTracking;

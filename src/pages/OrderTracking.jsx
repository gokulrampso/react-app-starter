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
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Order Tracking</h1>
      <p className="lead mb-3">
        Enter your order number below to track your shipment. For help, contact
        our support team.
      </p>
      <form className="mb-4" onSubmit={handleTrack} style={{ maxWidth: 400 }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Order Number"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">
            Track
          </button>
        </div>
      </form>
      {status && <div className="alert alert-info">{status}</div>}
    </div>
  );
}

export default OrderTracking;

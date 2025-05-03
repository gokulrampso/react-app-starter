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
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3 text-success">Thank you for your order!</h2>
        <p>Your order has been placed and will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-muted my-5">
          <i className="bi bi-cart-x fs-1 mb-3"></i>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li
                className="list-group-item d-flex align-items-center justify-content-between"
                key={item.id}
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: 40, height: 40, objectFit: "contain" }}
                    className="rounded border"
                  />
                  <span>{item.title}</span>
                  <div
                    className="input-group input-group-sm ms-2"
                    style={{ width: 100 }}
                  >
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => onDecreaseQty(item.id)}
                      disabled={item.qty === 1}
                    >
                      –
                    </button>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={item.qty}
                      readOnly
                      style={{ minWidth: 32 }}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => onIncreaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold text-primary">
                    ₹{item.price * item.qty}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onRemove(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="fw-bold fs-5">Total:</span>
            <span className="fs-4 fw-bold text-success">₹{total}</span>
          </div>
          {!showCheckout ? (
            <button
              className="btn btn-success btn-lg w-100"
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          ) : (
            <form
              className="card p-4 shadow-sm"
              onSubmit={handlePlaceOrder}
              style={{ maxWidth: 500, margin: "0 auto" }}
            >
              <h4 className="mb-3">Checkout</h4>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  value={form.address}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select
                  className="form-select"
                  name="payment"
                  value={form.payment}
                  onChange={handleInput}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
              <button className="btn btn-primary w-100" type="submit">
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

function Cart({ cart, onRemove, onIncreaseQty, onDecreaseQty, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartSidebar"
      aria-labelledby="cartSidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartSidebarLabel">
          Your Cart
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column">
        {cart.length === 0 ? (
          <div className="text-center text-muted my-5">
            <i className="bi bi-cart-x fs-1 mb-3"></i>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <ul className="list-group mb-3">
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
        )}
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-bold">Total:</span>
            <span className="fs-5 fw-bold text-success">₹{total}</span>
          </div>
          <button
            className="btn btn-success w-100"
            disabled={cart.length === 0}
            onClick={onCheckout}
            data-bs-dismiss="offcanvas"
          >
            <i className="bi bi-bag-check me-2"></i>Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

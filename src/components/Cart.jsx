function Cart({ cart, onRemove, onIncreaseQty, onDecreaseQty, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div tabIndex="-1" id="cartSidebar" aria-labelledby="cartSidebarLabel">
      <div>
        <h5 id="cartSidebarLabel">Your Cart</h5>
        <button
          type="button"
          aria-label="Close"
          onClick={() => onCheckout("close")}
        >
          ×
        </button>
      </div>
      <div>
        {cart.length === 0 ? (
          <div>
            <span>🛒</span>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                  <div>
                    <button
                      type="button"
                      onClick={() => onDecreaseQty(item.id)}
                      disabled={item.qty === 1}
                    >
                      –
                    </button>
                    <input type="text" value={item.qty} readOnly />
                    <button
                      type="button"
                      onClick={() => onIncreaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <span>₹{item.price * item.qty}</span>
                  <button onClick={() => onRemove(item.id)}>×</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div>
          <div>
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button disabled={cart.length === 0} onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

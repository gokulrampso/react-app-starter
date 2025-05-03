function Shipping() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Shipping Information</h1>
      <p className="lead mb-3">
        We offer fast, reliable shipping across India. Your order will be
        delivered safely and on time, every time.
      </p>
      <h5>Delivery Time</h5>
      <ul>
        <li>Metro Cities: 2-4 business days</li>
        <li>Other Locations: 4-7 business days</li>
      </ul>
      <h5>Shipping Charges</h5>
      <p>
        Free shipping on orders above ₹999. For orders below ₹999, a nominal
        shipping fee of ₹49 applies.
      </p>
      <h5>Order Tracking</h5>
      <p>
        Once your order is shipped, you'll receive a tracking link via email and
        SMS. You can also track your order on our Order Tracking page.
      </p>
      <h5>Questions?</h5>
      <p>
        Contact our support team at{" "}
        <a href="mailto:support@susisclothing.com">support@susisclothing.com</a>{" "}
        for any shipping-related queries.
      </p>
    </div>
  );
}

export default Shipping;

function Shipping() {
  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>
        Shipping Information
      </h1>
      <p style={{ fontSize: 18, marginBottom: 18, color: "#374151" }}>
        We offer fast, reliable shipping across India. Your order will be
        delivered safely and on time, every time.
      </p>
      <h5 style={{ fontWeight: 600, marginTop: 24 }}>Delivery Time</h5>
      <ul style={{ color: "#374151" }}>
        <li>Metro Cities: 2-4 business days</li>
        <li>Other Locations: 4-7 business days</li>
      </ul>
      <h5 style={{ fontWeight: 600, marginTop: 24 }}>Shipping Charges</h5>
      <p style={{ color: "#374151" }}>
        Free shipping on orders above ₹999. For orders below ₹999, a nominal
        shipping fee of ₹49 applies.
      </p>
      <h5 style={{ fontWeight: 600, marginTop: 24 }}>Order Tracking</h5>
      <p style={{ color: "#374151" }}>
        Once your order is shipped, you'll receive a tracking link via email and
        SMS. You can also track your order on our Order Tracking page.
      </p>
      <h5 style={{ fontWeight: 600, marginTop: 24 }}>Questions?</h5>
      <p style={{ color: "#374151" }}>
        Contact our support team at{" "}
        <a href="mailto:support@susisclothing.com">support@susisclothing.com</a>{" "}
        for any shipping-related queries.
      </p>
    </div>
  );
}

export default Shipping;

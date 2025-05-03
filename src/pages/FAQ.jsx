function FAQ() {
  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>
        Frequently Asked Questions (FAQ)
      </h1>
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>
          How do I place an order?
        </h5>
        <p>
          Browse our products, add your favorites to the cart, and proceed to
          checkout. You'll receive an order confirmation by email.
        </p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>
          What payment methods do you accept?
        </h5>
        <p>
          We accept all major credit/debit cards, UPI, net banking, and cash on
          delivery (COD) in select locations.
        </p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>
          How can I track my order?
        </h5>
        <p>
          After your order ships, you'll receive a tracking link by email and
          SMS. You can also track your order from the Order Tracking page.
        </p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>
          What is your return policy?
        </h5>
        <p>
          We offer a 30-day hassle-free return policy. Please visit our Returns
          page for details.
        </p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>
          How do I contact customer support?
        </h5>
        <p>
          Email us at{" "}
          <a href="mailto:support@susisclothing.com">
            support@susisclothing.com
          </a>{" "}
          or call +91 98765 43210.
        </p>
      </div>
    </div>
  );
}

export default FAQ;

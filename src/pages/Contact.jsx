function Contact() {
  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>
        Contact Us
      </h1>
      <p style={{ fontSize: 18, marginBottom: 18, color: "#374151" }}>
        We're here to help! Reach out to us with any questions, feedback, or
        support needs.
      </p>
      <div style={{ marginBottom: 24 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>Customer Support</h5>
        <p>
          Email:{" "}
          <a href="mailto:support@susisclothing.com">
            support@susisclothing.com
          </a>
        </p>
        <p>Phone: +91 98765 43210</p>
        <p>Hours: 9:00 AM – 8:00 PM IST, Monday to Saturday</p>
      </div>
      <div>
        <h5 style={{ fontWeight: 600, marginBottom: 8 }}>
          Business & Media Inquiries
        </h5>
        <p>
          Email:{" "}
          <a href="mailto:info@susisclothing.com">info@susisclothing.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;

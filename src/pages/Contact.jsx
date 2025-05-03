function Contact() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Contact Us</h1>
      <p className="lead mb-3">
        We're here to help! Reach out to us with any questions, feedback, or
        support needs.
      </p>
      <div className="mb-4">
        <h5>Customer Support</h5>
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
        <h5>Business & Media Inquiries</h5>
        <p>
          Email:{" "}
          <a href="mailto:info@susisclothing.com">info@susisclothing.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;

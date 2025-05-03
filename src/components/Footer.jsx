/**
 * Footer.jsx
 *
 * This file defines the Footer component for the application.
 * The Footer is a visually styled section that appears at the bottom of the page,
 * providing branding, external links, and copyright.
 *
 * Key features:
 * - Uses a linear gradient background and blur effects for a modern look.
 * - Displays Vite and React logos with the app name.
 * - Includes links to GitHub and React documentation with Bootstrap icons.
 * - Responsive layout using Bootstrap utility classes.
 * - Decorative gradient bar at the bottom for extra visual flair.
 */

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white mt-5 border-0 position-relative"
      style={{
        // Main background styling for the footer
        background:
          "linear-gradient(90deg, rgba(13,110,253,0.95) 0%, rgba(102,16,242,0.95) 100%)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "2px solid rgba(255,255,255,0.15)",
        borderRadius: "24px 24px 0 0",
        fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Susi's Clothing</h5>
            <p className="small text-white-50">
              Your one-stop shop for the latest tech and gadgets. Fast shipping,
              secure checkout, and top-rated support.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white-50 text-decoration-none"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white-50 text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq" className="text-white-50 text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-white-50 text-decoration-none"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-white-50 text-decoration-none"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="/order-tracking"
                  className="text-white-50 text-decoration-none"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/cookies"
                  className="text-white-50 text-decoration-none"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-white-50 text-decoration-none"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Connect</h6>
            <div className="d-flex gap-3 mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 fs-4"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 fs-4"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 fs-4"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="small text-white-50">
              Email: support@susisclothing.com
            </div>
            <div className="small text-white-50">Phone: +1 234 567 8901</div>
          </div>
        </div>
        <hr className="border-light opacity-25 my-4" />
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <span className="small text-white-50">
            &copy; 2024 Susi's Clothing. All rights reserved.
          </span>
          <span className="d-flex gap-3">
            <Link
              to="/legal"
              className="text-white-50 text-decoration-none small"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal"
              className="text-white-50 text-decoration-none small"
            >
              Terms
            </Link>
            <Link
              to="/sitemap"
              className="text-white-50 text-decoration-none small"
            >
              Sitemap
            </Link>
          </span>
        </div>
      </div>
      {/* Decorative gradient bar at the bottom of the footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 6,
          background:
            "linear-gradient(90deg, #fff0 0%, #0d6efd 40%, #6610f2 60%, #fff0 100%)",
          filter: "blur(4px)",
          opacity: 0.7,
        }}
      />
    </footer>
  );
}

export default Footer;

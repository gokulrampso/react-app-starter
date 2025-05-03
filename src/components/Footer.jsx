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
    <footer>
      <div>
        <div>
          <h5>Susi's Clothing</h5>
          <p>
            Your one-stop shop for the latest fashion. Fast shipping, secure
            checkout, and top-rated support.
          </p>
        </div>
        <div>
          <h6>Company</h6>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
            <li>
              <Link to="/order-tracking">Order Tracking</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>
              <Link to="/cookies">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Connect</h6>
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              F
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              T
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              I
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              L
            </a>
          </div>
          <div>Email: support@susisclothing.com</div>
          <div>Phone: +1 234 567 8901</div>
        </div>
      </div>
      <hr />
      <div>
        <span>&copy; 2024 Susi's Clothing. All rights reserved.</span>
        <span>
          <Link to="/legal">Privacy Policy</Link>
          <Link to="/legal">Terms</Link>
          <Link to="/sitemap">Sitemap</Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

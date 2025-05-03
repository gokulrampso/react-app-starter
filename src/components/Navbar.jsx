import {
  FaSearch,
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
} from "react-icons/fa";
import SusiLogo from "./SusiLogo";
import { Link } from "react-router-dom";

function Navbar({
  cartCount,
  onShowLogin,
  onShowSignup,
  onShowCart,
  search,
  setSearch,
  isAuth,
  setShowLogin,
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
          style={{
            fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: 1,
          }}
        >
          <SusiLogo size={36} />
          <span>
            <span style={{ color: "#fff", textShadow: "0 2px 8px #0d6efd" }}>
              Susi's
            </span>
            <span
              style={{
                color: "#ffe082",
                marginLeft: 6,
                textShadow: "0 2px 8px #6610f2",
              }}
            >
              Clothing
            </span>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <form
            className="d-flex me-3"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              if (!isAuth) setShowLogin(true);
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              <FaSearch />
            </button>
          </form>
          <button
            className="btn btn-outline-light me-2 d-flex align-items-center gap-1"
            onClick={onShowLogin}
          >
            <FaSignInAlt /> <span>Login</span>
          </button>
          <button
            className="btn btn-light me-3 d-flex align-items-center gap-1"
            onClick={onShowSignup}
          >
            <FaUserPlus /> <span>Signup</span>
          </button>
          <button
            className="btn btn-outline-light position-relative d-flex align-items-center gap-1"
            onClick={onShowCart}
            data-bs-toggle="offcanvas"
            data-bs-target="#cartSidebar"
          >
            <FaShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

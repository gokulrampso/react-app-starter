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
    <nav>
      <div>
        <Link to="/">
          <SusiLogo size={36} />
          <span>
            <span>Susi's</span>
            <span>Clothing</span>
          </span>
        </Link>
        <div>
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              if (!isAuth) setShowLogin(true);
            }}
          >
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
          <button onClick={onShowLogin}>
            <FaSignInAlt /> <span>Login</span>
          </button>
          <button onClick={onShowSignup}>
            <FaUserPlus /> <span>Signup</span>
          </button>
          <button onClick={onShowCart}>
            <FaShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

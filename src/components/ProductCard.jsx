import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: 180, objectFit: "contain" }}
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold mb-2">
          <Link
            to={`/product/${product.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {product.title}
          </Link>
        </h5>
        <p className="card-text text-primary fw-bold mb-2">₹{product.price}</p>
        <p className="card-text text-muted small flex-grow-1">
          {product.description}
        </p>
        <button
          className="btn btn-outline-primary mt-2 w-100"
          onClick={() => onAddToCart(product)}
        >
          <i className="bi bi-cart-plus me-2"></i>Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products, onAddToCart, isAuth, setShowLogin }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Product Not Found</h2>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: 400, objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.title}</h2>
          <h4 className="text-primary mb-3">₹{product.price}</h4>
          <p className="mb-4 text-muted">{product.description}</p>
          <div className="mb-3">
            <span className="badge bg-info me-2">{product.category}</span>
          </div>
          <button
            className="btn btn-success btn-lg px-4"
            onClick={() => {
              if (!isAuth) {
                setShowLogin(true);
                return;
              }
              onAddToCart(product);
            }}
          >
            <i className="bi bi-cart-plus me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

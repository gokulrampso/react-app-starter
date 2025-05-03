import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div>
        <h5>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h5>
        <p>₹{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => onAddToCart(product)}>+ Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

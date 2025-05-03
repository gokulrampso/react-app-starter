import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products, onAddToCart }) {
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))).sort(),
  ];
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <section className="container my-5" id="shop">
      <h2 className="mb-4 fw-bold text-secondary">Featured Products</h2>
      <ul className="nav nav-pills mb-4 gap-2">
        {categories.map((cat) => (
          <li className="nav-item" key={cat}>
            <button
              className={`nav-link${selected === cat ? " active" : ""}`}
              style={{ minWidth: 90 }}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
      <div className="row g-4">
        {filtered.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-12 text-center text-muted py-5">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;

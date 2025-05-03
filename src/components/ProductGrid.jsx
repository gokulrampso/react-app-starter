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
    <section id="shop">
      <h2>Featured Products</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button onClick={() => setSelected(cat)}>{cat}</button>
          </li>
        ))}
      </ul>
      <div>
        {filtered.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div>No products found in this category.</div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;

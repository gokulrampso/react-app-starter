import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import OrderTracking from "./pages/OrderTracking";
import Legal from "./pages/Legal";
import CookiePolicy from "./pages/CookiePolicy";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

const PRODUCTS = [
  // Men
  {
    id: 1,
    title: "Men's Classic T-Shirt",
    price: 499,
    description:
      "Experience all-day comfort with our 100% cotton classic t-shirt. Designed for a regular fit, this versatile tee is available in a range of vibrant colors, making it perfect for both casual outings and layering under jackets.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Indian men t-shirt
    category: "Men",
  },
  {
    id: 2,
    title: "Men's Slim Fit Jeans",
    price: 1299,
    description:
      "Crafted from premium stretch denim, these slim fit jeans offer a modern silhouette and superior comfort. The dark wash finish makes them ideal for both work and weekend wear, while the durable fabric ensures long-lasting use.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Indian men jeans
    category: "Men",
  },
  {
    id: 3,
    title: "Men's Hoodie",
    price: 999,
    description:
      "Stay cozy and stylish with our soft fleece hoodie. Featuring a kangaroo pocket and adjustable drawstring hood, this hoodie is perfect for chilly evenings, workouts, or casual streetwear looks.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // Indian men hoodie
    category: "Men",
  },
  {
    id: 4,
    title: "Men's Formal Shirt",
    price: 899,
    description:
      "Elevate your office attire with our slim fit, wrinkle-resistant formal shirt. Tailored for a sharp look, it's perfect for business meetings, formal events, or any occasion where you want to make a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80", // Indian men formal shirt
    category: "Men",
  },
  {
    id: 5,
    title: "Men's Kurta Pajama",
    price: 1199,
    description:
      "Embrace tradition with our elegant kurta pajama set, crafted from breathable fabric for all-day comfort. Ideal for festivals, weddings, and family gatherings, this set combines classic Indian style with modern tailoring.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    category: "Ethnic Wear",
  },
  {
    id: 6,
    title: "Men's Sports Shorts",
    price: 599,
    description:
      "Designed for performance, these quick-dry sports shorts are lightweight and breathable. The elastic waistband and side pockets make them perfect for running, gym sessions, or any active lifestyle.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Sportswear",
  },
  // Women
  {
    id: 7,
    title: "Women's Summer Dress",
    price: 1499,
    description:
      "Step out in style with our lightweight, knee-length summer dress. Featuring a beautiful floral print and a flattering fit, this dress is perfect for brunches, vacations, or casual day outs.",
    image:
      "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", // Indian women dress
    category: "Women",
  },
  {
    id: 8,
    title: "Women's Saree",
    price: 1999,
    description:
      "Drape yourself in elegance with our silk saree, adorned with traditional Indian motifs. The rich fabric and intricate detailing make it a stunning choice for weddings, festivals, and special occasions.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    category: "Ethnic Wear",
  },
  {
    id: 9,
    title: "Women's Skinny Jeans",
    price: 1399,
    description:
      "Our high-rise skinny jeans are made from stretch denim for a comfortable, figure-hugging fit. The classic blue shade pairs effortlessly with any top, making them a wardrobe essential.",
    image:
      "https://images.unsplash.com/photo-1516762689617-f5e0c1a7b8a5?auto=format&fit=crop&w=400&q=80", // Indian women jeans
    category: "Women",
  },
  {
    id: 10,
    title: "Women's Blouse",
    price: 799,
    description:
      "This chiffon blouse features a stylish v-neck and is available in a range of pastel colors. Lightweight and airy, it's perfect for both office wear and casual outings.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // Indian women blouse
    category: "Women",
  },
  {
    id: 11,
    title: "Women's Cardigan",
    price: 1099,
    description:
      "Stay warm and chic with our soft knit cardigan. The open front and long sleeves make it a versatile layering piece for any season, whether you're at work or relaxing at home.",
    image:
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80", // Indian women cardigan
    category: "Women",
  },
  // Kids
  {
    id: 12,
    title: "Kids' Graphic T-Shirt",
    price: 399,
    description:
      "Let your child express their personality with our fun graphic t-shirt. Made from soft cotton, it's gentle on the skin and perfect for everyday play and school.",
    image:
      "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80", // Indian kids t-shirt
    category: "Kids",
  },
  {
    id: 13,
    title: "Kids' Joggers",
    price: 499,
    description:
      "These comfy joggers feature an elastic waist and side pockets, making them ideal for active kids. The relaxed fit ensures freedom of movement for sports, playdates, or lounging.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Indian kids joggers
    category: "Kids",
  },
  {
    id: 14,
    title: "Kids' Hoodie",
    price: 699,
    description:
      "Keep your little one warm with our fleece hoodie, available in a variety of fun colors. The front pocket is perfect for storing small treasures or keeping hands cozy.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Indian kids hoodie
    category: "Kids",
  },
  // Accessories
  {
    id: 15,
    title: "Unisex Baseball Cap",
    price: 299,
    description:
      "Shield yourself from the sun in style with our adjustable, breathable baseball cap. The embroidered logo adds a touch of flair, making it a must-have accessory for all ages.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", // Indian cap
    category: "Accessories",
  },
  {
    id: 16,
    title: "Leather Belt",
    price: 499,
    description:
      "Our genuine leather belt features a classic buckle and timeless design. Suitable for both men and women, it's the perfect finishing touch for any outfit.",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", // Indian belt
    category: "Accessories",
  },
  {
    id: 17,
    title: "Wool Scarf",
    price: 599,
    description:
      "Wrap up in warmth with our soft wool scarf. The checkered pattern adds a fashionable twist, making it an essential accessory for the winter months.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Indian scarf
    category: "Accessories",
  },
  // Shoes
  {
    id: 18,
    title: "Men's Sneakers",
    price: 1999,
    description:
      "Step up your footwear game with our lightweight men's sneakers. The cushioned sole and modern design provide all-day comfort and style, whether you're at the gym or on the go.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", // Indian men sneakers
    category: "Shoes",
  },
  {
    id: 19,
    title: "Women's Ballet Flats",
    price: 1499,
    description:
      "These elegant ballet flats are designed for comfort and style. The slip-on design and cushioned insole make them perfect for work, parties, or everyday wear.",
    image:
      "https://images.unsplash.com/photo-1517260911205-8c6b8b6b7a6b?auto=format&fit=crop&w=400&q=80", // Indian women flats
    category: "Shoes",
  },
  {
    id: 20,
    title: "Kids' Sneakers",
    price: 999,
    description:
      "Our kids' sneakers are easy to wear, durable, and come in fun colors. Designed for active play, they provide the support and comfort growing feet need.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Indian kids sneakers
    category: "Shoes",
  },
];

const PAGES = {
  home: { title: "Home", content: null },
  about: {
    title: "About Us",
    content: (
      <p>
        Susi's Clothing is your one-stop shop for the latest fashion and
        apparel. We offer fast shipping, secure checkout, and top-rated support.
      </p>
    ),
  },
  careers: {
    title: "Careers",
    content: (
      <p>
        Join our team! We are always looking for talented individuals. Email
        your resume to careers@susisclothing.com.
      </p>
    ),
  },
  contact: {
    title: "Contact",
    content: (
      <p>Contact us at support@susisclothing.com or call +1 234 567 8901.</p>
    ),
  },
  blog: {
    title: "Blog",
    content: (
      <p>
        Read our latest articles and updates on tech, gadgets, and e-commerce
        trends.
      </p>
    ),
  },
  faq: {
    title: "FAQ",
    content: (
      <p>
        Find answers to common questions about orders, shipping, and returns.
      </p>
    ),
  },
  returns: {
    title: "Returns",
    content: (
      <p>
        Return policy: 30-day hassle-free returns. Contact support for more
        info.
      </p>
    ),
  },
  shipping: {
    title: "Shipping",
    content: (
      <p>
        We offer fast and reliable shipping worldwide. Track your order anytime.
      </p>
    ),
  },
  "order-tracking": {
    title: "Order Tracking",
    content: (
      <p>
        Enter your order number to track your shipment. For help, contact
        support.
      </p>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    content: (
      <p>Your privacy is important to us. Read our full privacy policy here.</p>
    ),
  },
  terms: {
    title: "Terms of Service",
    content: <p>Read our terms of service for using Susi's Clothing.</p>,
  },
  cookies: {
    title: "Cookie Policy",
    content: (
      <p>
        We use cookies to improve your experience. Learn more in our cookie
        policy.
      </p>
    ),
  },
  sitemap: {
    title: "Sitemap",
    content: <p>Explore all pages and categories on Susi's Clothing.</p>,
  },
};

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [search, setSearch] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    if (!isAuth) {
      setShowLogin(true);
      return;
    }
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleIncreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    setCart([]);
  };

  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSignup(true);
  const handleHideLogin = () => setShowLogin(false);
  const handleHideSignup = () => setShowSignup(false);

  // Footer/page navigation handler
  const handleNav = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Search filter
  const filteredProducts = search
    ? PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      )
    : PRODUCTS;

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        onShowLogin={handleShowLogin}
        onShowSignup={handleShowSignup}
        onShowCart={() => {}}
        search={search}
        setSearch={setSearch}
        isAuth={isAuth}
        setShowLogin={setShowLogin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductGrid
                products={filteredProducts}
                onAddToCart={handleAddToCart}
                navigate={navigate}
                isAuth={isAuth}
                setShowLogin={setShowLogin}
              />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={PRODUCTS}
              onAddToCart={handleAddToCart}
              isAuth={isAuth}
              setShowLogin={setShowLogin}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onIncreaseQty={handleIncreaseQty}
              onDecreaseQty={handleDecreaseQty}
              onRemove={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer onNav={handleNav} />
      <Cart
        cart={cart}
        onRemove={handleRemoveFromCart}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
        onCheckout={handleCheckout}
      />
      {/* Login Modal */}
      <div
        className={`modal fade${showLogin ? " show d-block" : ""}`}
        tabIndex="-1"
        style={{ background: showLogin ? "rgba(0,0,0,0.5)" : undefined }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleHideLogin}
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsAuth(true);
                  setShowLogin(false);
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Signup Modal */}
      <div
        className={`modal fade${showSignup ? " show d-block" : ""}`}
        tabIndex="-1"
        style={{ background: showSignup ? "rgba(0,0,0,0.5)" : undefined }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Signup</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleHideSignup}
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsAuth(true);
                  setShowSignup(false);
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

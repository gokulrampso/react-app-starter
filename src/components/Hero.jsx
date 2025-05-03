function Hero() {
  return (
    <section className="container my-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold mb-3">
            Discover the Best Deals on{" "}
            <span className="text-primary">Susi's Clothing</span>
          </h1>
          <p className="lead mb-4">
            Shop the latest products at unbeatable prices. Fast delivery, secure
            checkout, and top-rated customer service.
          </p>
          <a href="#shop" className="btn btn-primary btn-lg px-4 shadow">
            Shop Now <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
            alt="Shopping"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: 320 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

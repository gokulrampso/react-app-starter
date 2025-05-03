function Blog() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Susi's Clothing Blog</h1>
      <p className="lead mb-3">
        Stay updated with the latest trends, style tips, and news from the world
        of fashion. Our blog brings you inspiration, guides, and
        behind-the-scenes stories from Susi's Clothing.
      </p>
      <div className="mt-4">
        <h5>Latest Articles</h5>
        <ul>
          <li>
            <strong>Top 10 Summer Fashion Trends in India</strong> – Discover
            what's hot this season and how to style your wardrobe.
          </li>
          <li>
            <strong>How to Care for Your Ethnic Wear</strong> – Tips to keep
            your sarees and kurtas looking new.
          </li>
          <li>
            <strong>Behind the Scenes: Our Design Process</strong> – Meet our
            creative team and see how collections come to life.
          </li>
        </ul>
      </div>
      <p className="mt-4 text-muted">More articles coming soon. Stay tuned!</p>
    </div>
  );
}

export default Blog;
